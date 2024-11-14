from locust import task, run_single_user
from locust import FastHttpUser
from locust import HttpUser, task, between


class myrecording(HttpUser):
    host = "https://contoso-traders-ui2altig.azureedge.net"
    @task
    def t(self):
        self.client.get("/", name="Home Page")
        self.client.get("https://contoso-traders-productsaltig.eastus2.cloudapp.azure.com/v1/products/?type=all-products", name="Products")
        self.client.get("https://contoso-traders-productsaltig.eastus2.cloudapp.azure.com/v1/Products/search/xbox", name="Search Xbox")
        self.client.get("https://contoso-traders-productsaltig.eastus2.cloudapp.azure.com/v1/products/5", name="Product Details")
       
if __name__ == "__main__":
    run_single_user(myrecording)

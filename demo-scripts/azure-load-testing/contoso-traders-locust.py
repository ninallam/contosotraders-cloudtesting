from locust import task, run_single_user
from locust import FastHttpUser


class myrecording(FastHttpUser):
    host = "https://contoso-traders-ui2altig.azureedge.net"
    @task
    def t(self):
        with self.client.request(
            "GET",
            "/",
            catch_response=True,
            name="Home Page"
        ) as resp:
            pass
        with self.rest(
            "GET",
            "https://contoso-traders-productsaltig.eastus2.cloudapp.azure.com/v1/products/?type=all-products",
            headers={
                "accept": "application/json, text/plain, */*",
            },
            name="All Products"
        ) as resp:
            pass
        with self.rest(
            "GET",
            "https://contoso-traders-productsaltig.eastus2.cloudapp.azure.com/v1/Products/search/xbox",
            headers={
                "accept": "application/json, text/plain, */*",
            },
            name="Search Xbox"
        ) as resp:
            pass
        with self.rest(
            "GET",
            "https://contoso-traders-productsaltig.eastus2.cloudapp.azure.com/v1/products/5",
            headers={
                "accept": "application/json, text/plain, */*",
            },
            name="Product Details"
        ) as resp:
            pass

if __name__ == "__main__":
    run_single_user(myrecording)

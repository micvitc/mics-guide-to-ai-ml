---
title: "The Cloud"
---

## The Cloud

For this step we could have used any of the the big three AWS/Azure/GCP. On top of that there are several ways of running a container on the cloud. We'll stick with Azure. Mainly because Azure gives 100$ in free credits to students.

As for the service we'll use the easiest method WebApp for Containers.

Let's Begin.

First Login to the Azure Portal.

![](Pastedimage20240325012547.png)
After logging in click on Create a resource.
![](Pastedimage20240325012639.png)
Search for Web App for Containers.
![](Pastedimage20240325012703.png)
Click on Create.
![](Pastedimage20240325012826.png)
Select a resource group and a name.
![](Pastedimage20240325020412.png)
Change the Pricing plan to F1 for testing purposes. Later you can use dedicated plans.
![](Pastedimage20240325012940.png)
Now go to Dockerhub and repository with your image. Copy the tag of the image.
![](Pastedimage20240325013053.png)
Go to the Docker section and Choose image source as Dockerhub and paste the image tag. After that click on review and create and create your webapp instance.
![](Pastedimage20240325020805.png)
It will take a minute or so to launch the instance. Once launched go to the service page. Here you will find the Default Domain of the service. Here it is <https://mic-practice.azurewebsites.net/>
![](Pastedimage20240325020843.png)
You can access the app using this url.
![](Pastedimage20240325021304.png)
Finally we can test whether the API is working or not using a 3rd party tester from <https://reqbin.com/>
We can see that the /predict endpoint works perfectly.

And with that we have successfully deployed our model as a service onto the cloud. The model inference API can be used by anything that can send and receive HTTP requests.

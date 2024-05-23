---
title: "Docker"
---


## Docker

If you don't get anything out of this article, atleast I want you to get a decent idea of Docker. Docker on very basic level is supposed to prevent this problem.
![](Pastedimage20240324222704.png)

We'll be working on tons of projects together. And ML projects are a dependency hell. You hundreds of libraries and hundreds of versions of those libraries. Even a small discrepancy can lead to not just a severely painful deployment experience but also frustration for your team mates.

To solve this we'll use Docker. On the surface level just packages your application and dependencies in a container which can run anywhere.

The process of building a docker container is quite simple.

First install docker.
<https://docs.docker.com/get-docker/>

Once installed. Run the docker daemon.

Create a new directory called app in your project directory and put the main.py and model files in the app directory. Also create an empty \__init\__.py in the same directory. Create a requirements.txt file by running this command.

~~~
pip freeze -> requirements.txt
~~~

Create a new file called Dockerfile in the main directory. Inside it add.

~~~Dockerfile
FROM python:3.12.2-slim

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt 

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app

EXPOSE 80

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
~~~

In this file we configure the build. First we pull the base python image from the Dockerhub repository. Then we specify the working directory as /code. We copy the requirements.txt file from the host machine into the working directory.

~~~Dockerfile
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
~~~

Here the we install all the dependencies specified in requirements.txt.

~~~Dockerfile
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
~~~

Finally we run the above command to start the FastAPI app at 0.0.0.0 on port 80.

Now that the Dockerfile is created, its time to build the image.
The directory structure should look something like this.

~~~
- parent
 - app
  - __init__.py
  - main.py
  - model.pickle
 - Dockerfile
 - requirements.txt
~~~

To build the container run this command.

~~~
docker build -t mic-practice . 
~~~

Once the build is finished you can run the Docker container.

~~~
docker run -d --name test -p 80:80 mic-practice   
~~~

Here we create a container called test from the image mic-practice and we map the port 80 of the host to the port 80 of the container. This way any requests sent to port 80 of the host will be forwarded to port of the container (where the app is running).

Finally you should be able to access the app at <code>http://127.0.0.1:80/</code>

Before we move onto the next step, there is one last thing we must do.

We have to upload our image to Dockerhub. This we can access it from anywhere. For this you need to create an account on <https://hub.docker.com/>

First we have to change the name of our docker image to "username/image-name"

~~~
docker tag mic-practice norsu9011/mic-practice
~~~

Then we login using docker credentials.

~~~
docker login
~~~

And finally push the image to Dockerhub using.

~~~
docker push norsu9011/mic-practice
~~~

Now we are finally ready to jump into the cloud.

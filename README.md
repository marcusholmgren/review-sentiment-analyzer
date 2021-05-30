# Movie Review Sentiment Analysis
Machine Learning project that uses [PyTorch](https://pytorch.org) and IMDB movie reviews dataset to train a machine learning model to learn how to perform sentiment analysis.

Training of model is done with AWS [SageMaker](https://aws.amazon.com/sagemaker/).

## Structure

This is a mono repository with three parts

- [SageMaker Project.ipynb](./SageMaker%20Project.ipynb) Jupyter notebook with preprocessing and training code for sentiment model.
- train - model training code
- serve - deployment model endpoint code.
- [frontend](./frontend/README.md) web app for interacting with the API.

## Tech Stack

**Client:** Vanilla JS, TailwindCSS and Snowpack

**Server:** Python, AWS Lambda, AWS SageMaker, PyTorch, Jupyter, Pandas


## Resources

- Udactiy [Machine Learning Engineer](https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009t)
- [Connecting a web app to your PyTorch model using Amazon SageMaker](https://developers.facebook.com/blog/post/2020/08/03/connecting-web-app-pytorch-model-using-amazon-sagemaker/)

## License
[MIT](./LICENSE)

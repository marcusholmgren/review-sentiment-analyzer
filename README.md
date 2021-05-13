# Movie Review Sentiment Analysis
Machine Learning project that uses [PyTorch](https://pytorch.org) and IMDB movie reviews dataset to train a machine learning model to learn how to perform sentiment analysis.

Training of model is done with AWS [SageMaker](https://aws.amazon.com/sagemaker/).

## Structure

This is a mono repository with three parts

- [SageMaker Project.ipynb](./SageMaker Project.ipynb) Jupyter notebook with preprocessing and training code for sentiment model.
- train - model training code
- serve - deployment model endpoint code.
- [frontend](./frontend/README.md) web app for interacting with the API.

## Tech Stack

**Client:** Vanilla JS, TailwindCSS and Snowpack

**Server:** Python, AWS Lambda, AWS SageMaker, PyTorch, Jupyter, Pandas

## License
[MIT](./LICENSE)

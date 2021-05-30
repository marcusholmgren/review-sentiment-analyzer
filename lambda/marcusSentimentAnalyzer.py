# We need to use the low-level library to interact with SageMaker since the SageMaker API
# is not available natively through Lambda.
import boto3
import json

# The SageMaker runtime is what allows us to invoke the endpoint that we've created.
from typing import Dict

runtime = boto3.Session().client('sagemaker-runtime')


def lambda_handler(event: Dict, context):
    body = json.loads(event.get('body'))
    print(f'Request body: {body}')
    review = body['review']  # JSON data in event
    print(f'Request review: {review}')
    # Now we use the SageMaker runtime to invoke our endpoint, sending the review we were given
    response = runtime.invoke_endpoint(EndpointName='pytorch-inference-2021-05-30-16-16-32-577', # The name of the endpoint we created
                                       ContentType='text/plain',  # The data format that is expected
                                       Body=review.encode('utf-u'))  # The actual review

    # The response is an HTTP response whose body contains the result of our inference
    result = response['Body'].read().decode('utf-8')
    print(f'Response body: {result}')

    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': result
    }

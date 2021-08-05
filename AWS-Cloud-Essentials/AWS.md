
# AWS Cloud Essentials

* AWS Serveless Ecommerce Platform

Serverless Ecommerce Platform é uma implementação de exemplo de um backend Serverless para um website de e-commerce. Este exemplo não 
deve ser utilizado como uma plataforma de e-commerce AS-IS e sim como uma inspiração em como construir microserviços orientados a 
eventos na AWS: [AWS Seveless Ecommerce Platform](https://github.com/aws-samples/aws-serverless-ecommerce-platform)

* Serverless Land / Patterns

Utilize os padrões serverless para construir integrações usando templates AWS SAM e CDK. Abaixo segue alguns dos padrões que podem 
ajudar na construção da sua solução: [Serverless Land](https://serverlessland.com/patterns)

* Create an Amazon API Gateway HTTP API that invokes an AWS Lambda function

Este padrão implementa um Amazon API Gateway com uma rota padrão e configuração CORS para uma função Lambda escrita em NodeJS:
[Amazon Gateway HTTP API](https://serverlessland.com/patterns/apigw-lambda)

* Create an Amazon API Gateway REST API that integrates with an Amazon DynamoDB table

Este padrão cria um Amazon API Gateway que integra com uma tabela no Amazon DynamoDB. A API inclui um API Key e um plano de uso:
[Amazon Gateway REST API](https://serverlessland.com/patterns/apigw-dynamodb)

* Create an AWS AppSync API endpoint with a resolver to Amazon DynamoDB

O template SAM implementa um AppSync API, uma tabela no DynamoDB, um Schema GraphQL e múltiplos "resolvers" para a table do DynamoDB:
[AWS AppSync API](https://serverlessland.com/patterns/appsync-dynamodb)

* Create an Amazon API Gateway Wesbocket API that invokes an AWS Lambda function

Este padrão implementa um Amazon API Gateway Web Socket API com uma rota de $connect, $disconnect e uma rota customizada:
[Amazon Websocket API](https://serverlessland.com/patterns/apigw-websocket-api-lambda)

* Invoke a Lambda function from changes to a DynamoDB table

O template SAM implanta uma função Lambda, uma tabela no DynamoDB para processar alterações feitas nos dados mantidos nesta tabela:
[Invoke Lambda Function](https://serverlessland.com/patterns/dynamodb-lambda)

* Persist an item to a DynamoDB table from a Lambda Functon

O template SAM implanta uma função Lambda, uma tabela no DynamoDB para persistir dados na tabela:
[Click here](https://serverlessland.com/patterns/lambda-dynamodb)

* Create a Lambda function that resizes images uploaded to S3 via SQS

O template SAM implanta uma função Lambda, uma fila no SQS e 2 buckets no S3 para processar objetos enviados ao S3:
[Click here](https://serverlessland.com/patterns/s3-sqs-lambda)

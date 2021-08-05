
# Getting started

## What exactly is cloud computing?

Cloud computing enables you to stop thinking of your infrastructure as hardware, and instead think of (and use) it as software.

## Benefits of Cloud Computing

* Trade capital expense for variable expense
* Benefit from massive economies of scale
* Stop guessing about capacity
* Increase speed and agility
* Focus on what matters
* Go global in minutes

## Cloud computing deployment models

* Cloud
* Hybrid
* On-premises (private cloud)

## What is Amazon Web Services (AWS)

* AWS is a secure cloud patform that offers a broad set of global cloud-based products
* AWS provides you with on-demand access to compute, storage, network, database, and other IT resources and management tools
* AWS offers flexibility
* You pay only for individual services you need, for as long as you use them
* AWS services work together like building blocks

## AWS Global Infrastructure

An **AWS Region** is a geographical area.

* **Data replication** across Region is controlled by you
* **Communication** between Regions uses AWS backbone network infrastructure

Each Region provides full redundancy and connectivity to the network. A Region consists of two or more **Availability Zones**. 
Each AZ contain one or more datacenters and is a fully isolated partition of the AWS infrastructure.

* There are currently 69 AZ worldwide
* AZ consist of discrete **data centers**
* They are design for fault isolation
* They are interconnected with other AZ by using high-speed private networking
* You choose your AZ
* **AWS recommends replicating data and resources across AZ** for resiliency

Determine the right region for your services, applications, and data based on these factor:

1. Data governance, legal requirements
2. Proximity to customers (latency)
3. Services available within the Region
4. Costs (vary by Region)

## AWS Data Centers

* AWS data centers are **desgined for security**
* Data centers are where the data resides and data processing occurs
* Each data center has redundant power, networking, and connectivity, and is housed in a separate facility
* A data center typically has 50,000 to 80,000 physical servers

### Instance type details

			   | General Purpose | Compute Optimized |  Memory Optimized   | Accelerated Computing | Storage Optimized
-------------- | --------------- | ----------------- | ------------------- | --------------------- | -----------------
Instance types | a1,m4,m5,t2,t3  |       c4,c5       |    r4,r5,x1,z1	   |    f1,g3,g4,p2,p3     |     d2,h1,i3
-------------- | --------------- | ----------------- | ------------------- | --------------------- | -----------------
Use case	   |     Broad		 | High performance  | In-memory databases |   Machine learning    | Distributed file systems
Use case       |

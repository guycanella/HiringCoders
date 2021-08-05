
# DevOps

DevOps é uma abordagem de cultura, automação e design de plataforma que tem como objetivo agregar mais valor aos negócios e aumentar 
sua capacidade de resposta às mudanças por meio de entregas de servições rápidas e de alta qualidade. Tudo isso é possível por meio da 
disponibilização de serviçoes de TI rápidos e iterativos. Adotar DevOps significa conectar aplicações legadas a uma infraestrutura e 
aplicações modernas e nativas em nuvem.

## Dev

Planejamento e desenvolvimento, abordando fases de verificação, testes e entrega do sistema.

## Ops

Operação e infraestrutura, contempla a distribuição para o ambiente de produção, configuração, suporte, monitoriamento e feedbacks.

## Porque devo adotar a cultura DevOps?

Obrigações de uma cultura DevOps:

* Colaboração entre as equipes Dev e Ops
* Ciclos de entregas rápidas
* Desenvolvimento ágil
* Integração e Entrega Contínua
* Gerenciamento e Configuração de Softwares (GCS)
* Centralização de Logs
* Monitoriamento e coleta de dados e métricas
* Infraestrutura escalável e automatizada

Pontos primordiais da cultura DevOps:

* Mudança de cultura e mentalidade
* Remover a barreira entre dois silos: Desenvolvimento e Operações
* As duas equipes trabalham juntas para otimizar a produtividade dos desenvolvedores e a confiabilidade das operações 
* Manter a comunicação frequente, aumentar a eficiência e melhorar a qualidade dos serviços disponibilizados aos clientes
* As equipes assumem responsabilidade total pelos serviços, geralmente indo além do escopo tradicional de seus cargos e títulos definidos
* As equipes de controle de qualidade e segurança também podem se tornar altamente integradas a essas equipes

## Time de Dev

### Desenvolvimento de sistemas

* Mudança contínua
* Novos recursos e funcionalidades
* Testes

-> Lançamento de um novo produto

### Operação do sistema

* Configuração
* Monitoriamento
* Estabilidade
* Novos serviços

-> Manter o sistema em funcionamento

## Culture Automation Monitoring Sharing (CAMS)

### Cultura no DevOps

* Destrua os silos
* A interação entre as equipes é fundamental para o DevOps
* Esteja aberto a nova opções
* Pare de culpar
* Comunique-se com todos, independente da hierarquia
* Envolva toda a equipe nos processos e decisões
* Sempre pergunte
* Nunca diga nunca
* Faça Stand-ups diários

### Automação no DevOps

Este é o ponto mais atrativo do DevOps para os gestores, pois trás um ganho de produtividade. Mas essa não é a razão do uso de 
Automação no DevOps.

* Evitar defeitos
* Criar consistência no software e no ambiente de operação
* Melhoria de qualidade
* Optimização de tarefas repetitivas

**O que podemos automatizar:**

* Builds
* Implementações
* Testes
	* Qualidade de código
	* Funcional
	* Integração
* Optimização de tarefas repetitivas
* Deploy
* Release
* Monitoriamento

## Pessoas, Projetos e Tecnologias (PPT)

Em alguns casos os temas de segurança também devem ser envolvidos nos processos visando otimizar o desenvolvimento e reduzir as brechas 
de segurança. Neste caso podemos chamar de **DevSecOps**.

### Ferramentas aplicadas a Colaboração

**Gerenciamento de projetos**

- Jira
- Trello
- Basecamp

**Gerenciamento de Ciclo de Vida da Aplicação (ALM)**

- Azure DevOps
- Octane

**Comunicação**

- Slack
- MS Teams

**ChatOps**

- COG
- LITA

**Compartilhamento**

- Github

**Documentação**

- Swagger
- Apiblueprint

### Ferramentas aplicadas a Construção

**Versionamento de código**

- Git
- SVN
- Bitbucket

**Integração contínua**

- Jenkins
- Travis CI
- BammBoo

**Build**

- SMSBuild
- Maven
- Gulp

**Gerenciamento de banco de dados**

- DBmaestro
- Flyway
- Redgate

## Ferramentas aplicadas a Qualidade

**Teste de unidade**

- Qunit
- Unit.net

**Desenvolvimento orientado a teste (TDD)**

- VectorCAST

**Desenvolvimento orientado ao comportamento (BDD)**

- Cucumber
- Specflow

**Teste de segurança**

- QWASP ZAP

**Teste de integração**

- POSTMAN
- SoapUI
- Teste automatizado
- Jasmine
- Jmiter

### Ferramentas aplicadas a Implantação

**Implantação**

- Octopus deploy
- Urban{code}
- Rundeck

**Gerenciamento de Configuração e Provisionamento**

- Puppet
- Terraform
- Ansible
- Chef

**Gerenciamento de artefatos**

- Docker
- NPM
- Nuget
- Bower

### Ferramentas aplicadas a Produção

**Cloud**

- AWS Web Services
- Google Cloud Platform
- MS Azure
- Heroku
- RackSpace

**Orquestração e Agendamento**

- Docker swarm
- Mesos
- Rancher
- Kubernetes

**BI/Monitoriamento/Loggin**

- ElasticSearch
- Kibana
- Logstash
- Zabbix
- Splunk

## DevOps e Desenvolvimento Ágil

Código		Build		|	Integração		Testes	|	Release		|	Deploy	|	Operação	|
						|							|				|			|				|
Desenvolvimento ágil	|							|				|			|				|
----------------------> |	Integração contínua		|				|			|				|
--------------------------------------------------> |				|			|				|
												Entrega contínua	|			|				|
------------------------------------------------------------------> |			|				|
														Implantação contínua	|				|
------------------------------------------------------------------------------> |				|
																						DevOps	|
----------------------------------------------------------------------------------------------> |

## CI/CD

O ciclo de desenvolvimento DevOps pode ser dividido em 5 fases: **Desenvolvimento**, **Teste**, **Integração**, **Deploy** e 
**Monitoriamento**. Essas fases são comumentes agrupadas em: **Integração Contiínua** e **Entrega Contínua** (CI e CD).



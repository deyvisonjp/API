# API, REST, E RESTFUL
   _CONTEUDO TOP de_ https://youtu.be/ghTrp1x_1As?t=1705
   
## API

Acronimo de Aplication Programming (Interface de 
Programação de Aplicações) . . .
. . . É basicamente um conjunto de rotinas padrões estabelecidos
por uma aplicação, para que outras aplicações possam utilizar
funcionalidades desta aplicação.

Exemplificação:
   Cliente (Client);
   Garçom (pedidos, levar seus pedidos, para a cozinha) API;
   Cozinha (Server);

API é 
- Responsável por estabelecer comunicação entre diferentes serviços;
- Meio de campo entre tecnologias;
- Intermediador para troca de informações.

## REST

Acronimo de Representational State Transfer (Transferencia de Estado Representativo)
As transferencias de dados, geralmente, usando o protocolo HTTP.
São as boas práticas, responsável pelas regras e obrigações nas transferencias de dados.
Resources é então, uma entidade, contém dados associados, tem relacionamentos com outros resources (Verbos HTTP)


## RESTFUL
Restful é portanto aplicar os padrões REST.

### 6 Necessidades (constraints) para ser RESTFUL

- _Client-Server_: Separação do cliente e do armazenamento de dados(servidor), desta forma,
 poderemos ter uma portabilidade do nosso sistema, usando o React para Web e ReactNative para 
 o smartphone, por exemplo.

 - _Stateless_: Ou seja SEM ESTADO, cada requisição(REQUEST) que o client faz para o servidor,
 deverá conter todas as informações necessárias para o servidor enetender e responder(RESPONSE). 

 - _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.

- _Layred System_: O client acessa as endpoints sem a necessidade de saber a complexidade do processo REQUEST e RESPONSE. 
   ...URI <=> endpoint => São os caminhos depois da URL (site/endpoint)

- _Code on demand (é opcional)_: Possibilita a aplicaão pegar códigos, como javascript e executar no client.   

## BOAS PRÁTICAS

- Verbos HTTP
   GET - POST - PUT - DELETE (4 PRINCIPAIS);
- Não utilizar barra no fim de endpoints;   
- Nunca deixe seu cliente sem respostas!!!;

# --------------- PROCESSO CRIAÇÃO DO PROJETO ---------------
> yarn init -y
> yarn add express
   _yarn.lock_: Faz o mapeamento das dependencias

### STATUS DAS RESPOSTAS
- 1xx: Informação;
- 2xx: Sucesso;
- 3xx: Redirecionamentos;
- 4xx: Client Error;
- 5xx: Server Error;

***link para arquivo json
   https://jsonplaceholder.typicode.com/users

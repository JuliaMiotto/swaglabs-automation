**Abordagem Utilizada**

Para modelar e automatizar os testes da aplicação Swag Labs (https://www.saucedemo.com/), utilizei uma abordagem baseada em cenários de teste orientados por comportamento (BDD).

🔹 Modelagem estruturada dos cenários

Cada cenário foi descrito em formato de tabela, contendo:

- [x] ID

- [x] Título do teste

- [x] Pré-condições

- [x] Passos detalhados

- [x] Resultado esperado

Essa organização facilita a leitura, rastreabilidade dos testes e permite comunicação clara com qualquer membro da equipe. Esse padrão também ajuda na documentação e alinhamento com requisitos do sistema.

📌 Escolhas específicas dentro da automação:

Defini nas configurações do projeto a URL https://www.saucedemo.com como ```BaseUrl```.

Utilizei o comando customizado ```cy.login()``` para reduzir a repetição de código e aumentar a legibilidade dos testes, centralizando a lógica de login em um único lugar.

Separei os test cases em pastas por funcionalidade (login, produtos e checkout), tornando o código mais organizado e facilitando a manutenção.

Criei script também para testes de ordenações com ```.sort()``` e ```.reverse()```, o que permitiu validar a lógica de ordenação com precisão, comparando os valores reais com uma versão esperada ordenada dinamicamente no próprio teste.

Dividi os testes de formulários de campos obrigatórios (tanto no login quanto no formulário de checkout) para que a obrigatoriedade de cada campo fosse testada individualmente. Isso melhora a cobertura de testes e ajuda a identificar falhas específicas.

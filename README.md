# AplicacaoWebRegistroClientes

Este projeto é um sistema para registro de clientes e endereços, com uma interface de usuário simples e funcional. O sistema é desenvolvido com HTML, CSS e JavaScript, utilizando armazenamento local para persistência de dados. É responsivo para desktop e dispositivos móveis, com um design corporativo.

## Estrutura do Projeto

client-address-app/ <br>
|-- css/ <br>
|   |-- styles.css <br>
|-- js/ <br>
|   |-- script.js <br>
|-- index.html <br>
|-- INFO.txt <br> 
|-- README.md <br>

## Funcionalidades

- **Tela de Login**: Permite que usuários façam login no sistema.
- **Tela de Registro de Usuário**: Permite o registro de novos usuários.
- **Tela de Registro de Cliente**: Permite o cadastro de clientes com informações detalhadas.
- **Tela de Registro de Endereço**: Permite o cadastro de endereços associados aos clientes.
- **Dashboard**: Mostra informações e permite a navegação entre telas.
- **Exportar Banco de Dados**: Permite exportar os dados de clientes e endereços em um arquivo JSON.
- **Carregar Banco de Dados**: Permite carregar dados a partir de um arquivo JSON.
- **Voltar ao Menu Principal**: Permite retornar à tela de login a partir do dashboard.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página web.
- **CSS**: Estilização e design responsivo.
- **JavaScript**: Funcionalidades e manipulação de dados.
- **LocalStorage**: Armazenamento de dados no navegador.

## Como Executar o Projeto

1. **Baixe ou clone o repositório**:
    ```bash
    git clone <https://github.com/Guzzatti/AplicacaoWebRegistroClientes>
    ```

2. **Abra o arquivo `index.html` em seu navegador**.

3. **Utilize o sistema conforme as instruções abaixo**.

## Instruções de Uso

### Tela de Login

- Insira seu nome de usuário e senha.
- Clique em "Login" para acessar o dashboard.
- Se ainda não estiver registrado, clique em "Registrar" para criar uma nova conta.

### Tela de Registro de Cliente

- Preencha os campos com as informações do cliente.
- Clique em "Registrar Cliente" para adicionar o cliente ao sistema.

### Tela de Registro de Endereço

- Preencha os campos com as informações do endereço.
- Selecione se o endereço é o principal.
- Clique em "Registrar Endereço" para adicionar o endereço ao sistema.

### Dashboard

- **Exportar Banco de Dados**: Clique em "Exportar Banco de Dados" para baixar os dados em um arquivo JSON.
- **Carregar Banco de Dados**: Clique em "Carregar Banco de Dados" para importar dados de um arquivo JSON.
- **Voltar ao Menu Principal**: Clique em "Voltar ao Menu Principal" para retornar à tela de login.

## Detalhes Técnicos

- **Armazenamento Local**: Utilizado para persistir dados de usuários, clientes e endereços.
- **Validação**: Verificação básica de entrada para evitar duplicidade e garantir integridade dos dados.

## Contribuição

Se você deseja contribuir para este projeto, por favor, faça um fork do repositório e envie um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

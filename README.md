# AIDUBEI![Component 1(3)](https://github.com/julia-stamborovski/aidubei/assets/87834766/80f697d0-bcaf-4d74-85db-ef02eb5e5291)

# Documento de detalhe da solução
## Introdução
A solução “AIdubei” tem como objetivo transformar o desperdício de comida em adubo por meio da compostagem, promovendo a sustentabilidade e a redução do chamado impacto ambiental. Essa solução, possui como proposta central o engajamento das famílias a participarem ativamente do processo de compostagem, fornecendo-lhes orientações personalizas e recompensas em troca do seu envolvimento.
## Arquitetura da solução

A solução consiste em uma plataforma mobile e web, onde as famílias possui a possibilidade de se cadastrarem, registrarem seus resíduos de comida e receber recomendações personalizadas sobre a compostagem. A plataforma irá possuir os seguintes componentes,

2.1 - Frontend

☘️ Interface intuitiva para cadastro e gerenciamento de resíduos de comida; <br />

☘️ Visualização de recomendações personalizadas;<br />

☘️ Chatbot para suporte;<br />

☘️ Sistema de gamificação com conquistas e recompensas.<br />

2.2 - Backend

☘️ Banco de dados para armazenar informações de usuários e seus resíduos de comida;<br />

☘️ API para integração com IA generativa;<br />

☘️ Serviços de autenticação e autorização.<br />

## Integração com IA generativa
A IA generativa irá desempenhar um papel fundamental na geração de recomendações personalizadas, considerando os tipos de resíduos, suas proporções ideais e outras variáveis necessárias para uma boa compostagem. 
3.1 - Escolha da IA<br />

☘️ GPT-3 da OpenAI. Podendo ser integrado à solução por meio da API da OpenAI.<br />

3.2 - Integração com a API da OpenAI<br />

☘️ Para a integração com a API da OpenAI, utilizaremos a linguagem de programação Python e a biblioteca Pandas e Spacy (para realizar o pré-processamento dos dados de entrada). A API da OpenAI permite enviar solicitações de texto e receber respostas geradas pelo modelo GPT-3.<br />
## Fluxo de funcionamento
1. Coleta de dados —> o aplicativo coleta dados relevantes dos usuários (informações de perfil, histórico de compostagem e suas preferências).
2. Processamento da linguagem natural —> Os dados coletados anteriormente, são pré-processados usando técnicas do Processamento da Linguagem Natural, para extrair informações úteis e identificar padrões.
3. Chamada à API da IA —> Com base nos dados, o aplicativo faz chamadas à API do GPT-3 para obter respostas e recomendações personalizadas.
4. Geração de Recomendações —> A IA generativa analisa os dados de entrada e fornece recomendações que são relevantes para o usuário. Exemplo: Dicas de compostagem, informações sobre estabelecimento parceiros, receita de aproveitamento integral dos alimentos, entre outros.
5. Apresentação das Recomendações para o Usuário —> Por meio da interface do aplicativo, incluindo mensagens personalizadas, notificações push e seções dedicadas no painel principal.
6. Feedback e Aprendizado —> O aplicativo permite que os usuários forneçam feedback sobre as recomendações, o objetivo do feedback é melhorar de maneira contínua a precisão e relevância das recomendações geradas pela IA.

# Modelagem de dados que suporte a solução![Untitled](https://github.com/julia-stamborovski/aidubei/assets/87834766/2e0a7a54-3d23-4d53-b175-1918c445ee12)

# Programação de possíveis recursos de banco de dados

## Registro de dados de compostagem
Registrar informações sobre o processo de compostagem, como: quantidade de resíduos compostados, duração do processo, composição do adubo produzido. Para que possua um acompanhamento e monitoramento do progresso da compostagem.
~~~
CREATE TABLE Compostagem (
  id INT PRIMARY KEY AUTO_INCREMENT,
  data_registro DATE,
  quantidade_residuos DECIMAL(10,2),
  duracao_processo TIME,
  composicao_adubo TEXT,
  outros_dados TEXT
);
~~~
## Informações dos usuários
Armazenas informações, como: nome, endereço, informações de contato e dados sobre o volume de resíduos de comida compostados por cada família. 
~~~
CREATE TABLE Participantes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  endereco VARCHAR(200),
  telefone VARCHAR(20),
  email VARCHAR(100),
  volume_compostado DECIMAL(10,2)
);
~~~
## Dados de parcerias
Informações como: nome, localização, volume de comida gerado e frequência de coleta. Os dados contribuirão para gerenciar as operações de coleta e a manter registros precisos das parcerias
~~~
CREATE TABLE Parcerias (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome_estabelecimento VARCHAR(100),
  localizacao VARCHAR(200),
  volume_residuos DECIMAL(10,2),
  frequencia_coleta VARCHAR(50)
);
~~~
## Auditoria e Rastreabilidade
Inclui: registros de coleta de resíduos de comida, movimentação do material, processamento de compostagem e distribuição do adubo. A rastreabilidade será útil para monitorar a **qualidade**do adubo, garantindo conformidade com regulamentos ambientais.
~~~
CREATE TABLE Auditoria (
  id INT PRIMARY KEY AUTO_INCREMENT,
  id_compostagem INT,
  etapa VARCHAR(100),
  data_registro DATETIME,
  usuario VARCHAR(100),
  observacoes TEXT
);
~~~
## Automações e Integrações
~~~
import pandas as pd

df_compostagem = pd.read_sql("SELECT * FROM Compostagem", conexao)

relatorio_compostagem = df_compostagem.to_html()
~~~

## Análise de dados e Tomada de decisão
~~~
import pandas as pd


df_participantes = pd.read_sql("SELECT * FROM Participantes", conexao)

media_residuos_compostados = df_participantes['volume_compostado'].mean()
~~~




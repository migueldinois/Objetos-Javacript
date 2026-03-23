# <p align="center" style="color: #e74c3c;">Sistema de Gestão de Pet Virtual (Tamagotchi)</p>

---

### **Objetivo da atividade**
Nesta atividade, você irá aplicar os conhecimentos aprendidos sobre **Objetos Literais, Métodos, Manipulação de DOM e Lógica Condicional**. O objetivo é gerenciar o estado de vida de um animal de estimação digital.

### **Estrutura do projeto**
Seu projeto deve conter os seguintes arquivos:
- `index.html`
- `style.css`
- `script.js`

---

### **Domínio do sistema**
O sistema deve representar um objeto único chamado `pet`.
Este objeto deve possuir as seguintes propriedades:
- **Nome**: Definido pelo usuário ou inicial (ex: "Bichinho").
- **Fome**: Valor numérico de 0 a 100 (inicia em 50).
- **Felicidade**: Valor numérico de 0 a 100 (inicia em 50).
- **Energia**: Valor numérico de 0 a 100 (inicia em 100).

---

### **Funcionalidades do Sistema**

#### **1. Alimentar o Pet**
Ao clicar no botão **ALIMENTAR**, o sistema deve:
- Reduzir o nível de **Fome** em 15 pontos.
- Aumentar o nível de **Felicidade** em 5 pontos.
- Consumir 5 pontos de **Energia**.
- **Regra:** A fome nunca pode ser menor que 0.

#### **2. Brincar com o Pet**
Ao clicar no botão **BRINCAR**, o sistema deve:
- Aumentar o nível de **Felicidade** em 20 pontos.
- Aumentar o nível de **Fome** em 10 pontos.
- Consumir 15 pontos de **Energia**.
- **Regra:** Se a energia estiver abaixo de 20, o pet não pode brincar e deve exibir a mensagem: *"Estou muito cansado para brincar!"*.

#### **3. Status de Saúde (Verificar Status)**
Ao clicar no botão **STATUS**, o sistema deve realizar uma análise dos atributos:
- **Crítico:** Se fome for > 90 ou energia for < 10, exibir: *"Socorro! Estou passando mal!"*.
- **Bom:** Se felicidade for > 80, exibir: *"Estou muito feliz hoje!"*.
- **Normal:** Para os demais casos, exibir: *"Estou bem, o que vamos fazer?"*.

#### **4. Atualização da Interface (Barra de Status)**
Todas as ações devem atualizar visualmente:
- Os textos de porcentagem no HTML.
- A largura (`width`) das barras coloridas de progresso.
- As cores das barras: verde para status bom (>50), amarelo para alerta (20-50) e vermelho para crítico (<20).

---

### **Regras de Negócio (Obrigatório!)**
- **Validar Limites:** Nenhum atributo pode ultrapassar 100 ou ser menor que 0.
- **Feedback Visual:** Todas as mensagens de status devem aparecer no elemento `#mensagem-pet` do HTML.

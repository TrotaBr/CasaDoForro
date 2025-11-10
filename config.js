// const APP_CONFIG armazena todos os seus dados.
// É isso que a página admin.html vai editar.
const APP_CONFIG = {
    
    // ATENÇÃO: Mude esta senha! Esta é a senha para acessar a página admin.html
    adminPassword: "admin123",

    // PREÇOS PADRÃO (Para Mão de Obra, Frete, etc.)
    // Estes valores são usados no Passo 4 da calculadora
    standardPrices: {
        ESTRUTURA_BARRA_3M: 10.00,
        PARAFUSO_UNIDADE: 0.10,
        MAO_DE_OBRA_M2: 20.00,
        FRETE_TOTAL: 50.00,
        ACABAMENTO_PERFIL_U_BRANCO: 35.40,      
        ACABAMENTO_PERFIL_U_COLORIDO: 47.40,    
        ACABAMENTO_MEIA_CANA_BRANCO: 41.40,     
        ACABAMENTO_MEIA_CANA_COLORIDO: 53.40,   
        CANTO_INTERNO_UNIDADE: 5.00,
    },

    // MODELOS DE FORRO (Para o menu de seleção - Passo 2)
    // 'group': O título da categoria no menu (ex: "Forros Lisos")
    // 'value': O nome exato do produto (DEVE ser igual ao nome no 'stock' abaixo)
    // 'price': Preço por m²
    // 'category': Categoria de cor ('Branco' ou 'Colorido') - para o preço do acabamento
    models: [
        {
            group: "Forros Lisos Junta Seca (Brancos)",
            items: [
                { value: "Forro Liso Junta Seca Branco (8mm)", price: 29.90, category: "Branco" },
                { value: "Forro Liso Junta Seca Branco (10mm)", price: 35.90, category: "Branco" }
            ]
        },
        {
            group: "Forros Lisos Junta Seca (Coloridos/Amadeirados)",
            items: [
                { value: "Forro Liso Junta Seca Jatobá (8mm)", price: 39.90, category: "Colorido" },
                { value: "Forro Liso Junta Seca Peroba (8mm)", price: 39.90, category: "Colorido" },
                { value: "Forro Liso Junta Seca Carvalho (8mm)", price: 39.90, category: "Colorido" },
                { value: "Forro Liso Junta Seca Cerejeira (8mm)", price: 39.90, category: "Colorido" },
                { value: "Forro Liso Junta Seca Platinum (8mm)", price: 39.90, category: "Colorido" }
            ]
        },
        {
            group: "Gemini Frizados (Clássicos - Brancos)",
            items: [
                { value: "Forro Frizado Branco (6mm)", price: 14.99, category: "Branco" },
                { value: "Forro Frizado Branco (8mm)", price: 17.90, category: "Branco" },
                { value: "Forro Frizado Branco (10mm)", price: 21.90, category: "Branco" }
            ]
        },
        {
            group: "Gemini Frizados (Clássicos - Amadeirados)",
            items: [
                { value: "Forro Frizado Jatobá (8mm)", price: 39.90, category: "Colorido" },
                { value: "Forro Frizado Peroba (8mm)", price: 39.90, category: "Colorido" },
                { value: "Forro Frizado Carvalho (8mm)", price: 39.90, category: "Colorido" },
                { value: "Forro Frizado Cerejeira (8mm)", price: 39.90, category: "Colorido" },
                { value: "Forro Frizado Platinum (8mm)", price: 39.90, category: "Colorido" }
            ]
        }
    ],

    // ESTOQUE DE LÂMINAS (Para o cálculo de "Detalhes das Lâminas")
    // O nome aqui (ex: "Forro Frizado Branco (6mm)") 
    // DEVE ser exatamente igual ao 'value' usado no 'models' acima.
    // Os números são os comprimentos disponíveis em metros.
    stock: {
        // Frizado 6mm
        "Forro Frizado Branco (6mm)": [4, 5, 6, 7],
        
        // Frizado 8mm
        "Forro Frizado Branco (8mm)": [4, 5, 6, 7, 10],
        "Forro Frizado Jatobá (8mm)": [6],
        "Forro Frizado Peroba (8mm)": [6], 
        "Forro Frizado Carvalho (8mm)": [6],
        "Forro Frizado Cerejeira (8mm)": [6],
        "Forro Frizado Platinum (8mm)": [6],

        // Frizado 10mm
        "Forro Frizado Branco (10mm)": [6],

        // Liso 8mm
        "Forro Liso Junta Seca Branco (8mm)": [5, 6, 7, 8],
        "Forro Liso Junta Seca Jatobá (8mm)": [6, 7, 8, 9],
        "Forro Liso Junta Seca Platinum (8mm)": [6],
        "Forro Liso Junta Seca Carvalho (8mm)": [6],
        "Forro Liso Junta Seca Cerejeira (8mm)": [6],
        "Forro Liso Junta Seca Peroba (8mm)": [6],

        // Liso 10mm
        "Forro Liso Junta Seca Branco (10mm)": [6],

        // Padrão
        "DEFAULT": [6] // Usado para qualquer item não listado acima
    }
};
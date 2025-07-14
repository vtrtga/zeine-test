function useTexts() {
  const texts = {
    HOME: {
      ACCESS_PAINEL: "Acessar o Painel →",
      TITLE: "Bem vindo ao Painel do Vendedor",
    },
    LOGIN: {
      EMAIL_PLACEHOLDER: "Digite seu e-mail",
      PASSWORD_PLACEHOLDER: "Digite sua senha",
      FORGOT_PASSWORD: "Esqueci minha senha",
      REGISTER: "Não é cadastrado? Cadastre-se",
      ENTER: "Entrar",
      LOADING: "Entrando...",
    },
    PRODUCT_REGISTER: {
      TITLE: "Cadastrar Produto",
      DESCRIPTION: "Preencha os dados do produto para registrá-lo.",
      SAVE: "Salvar",
      LOADING: "Salvando...",
      TITLE_PLACEHOLDER: "Título do Produto",
      DESCRIPTION_PLACEHOLDER: "Descrição do Produto",
      PRICE_PLACEHOLDER: "Preço do Produto",
      IMAGE_URL_PLACEHOLDER: "URL da Imagem",
      CATEGORY_PLACEHOLDER: "Categoria do Produto",
      STATUS_PLACEHOLDER: "Status do Produto",
      STATUS_ACTIVE: "Ativo",
      STATUS_INACTIVE: "Inativo",
      STATUS_SOLD: "Vendido",
      CANCEL: "Cancelar",
      PUBLISH: "Publicar",
    },
    USER_REGISTER: {
      TITLE: "Criar Conta",
      DESCRIPTION: "Preencha os campos abaixo para se cadastrar.",
      NAME_PLACEHOLDER: "Nome completo",
      EMAIL_PLACEHOLDER: "E-mail",
      PASSWORD_PLACEHOLDER: "Senha",
      CONFIRM_PASSWORD_PLACEHOLDER: "Confirme a senha",
      BIRTHDATE_PLACEHOLDER: "Data de nascimento (opcional)",
      PHONE_PLACEHOLDER: "Telefone (opcional)",
      REGISTER: "Registrar",
      LOADING: "Registrando...",
    },
    HEADER: {
      LOGOUT: "Sair",
      LOADING: "Saindo...",
    }
  };

  return texts;
}

export default useTexts;
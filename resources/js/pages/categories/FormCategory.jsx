export default function FormCategory(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="categoryName">Nome da Categoria</label>
        <input
          type="text"
          id="categoryName"
          className="form-control"
          value={props.categoryName}
          onChange={(e) => props.setCategoryName(e.target.value)}
          placeholder="Digite o nome da categoria"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={props.loading || !props.categoryName.trim()}
      >
        {props.loading ? "Carregando..." : "Salvar Categoria"}
      </button>
    </form>
  )
}
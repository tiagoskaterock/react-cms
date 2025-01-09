export default function PostForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="postName">Título do Post</label>
        <input
          type="text"
          id="postName"
          className="form-control"
          value={props.postName}
          onChange={(e) => props.setPostName(e.target.value)}
          placeholder="Digite o título do post"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="postBody">Conteúdo do Post</label>
        <textarea
          id="postBody"
          className="form-control"
          value={props.postBody}
          onChange={(e) => props.setPostBody(e.target.value)}
          placeholder="Digite o conteúdo do post"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="categoryId">Categoria</label>
        <select
          id="categoryId"
          className="form-control"
          value={props.categoryId}
          onChange={(e) => props.setCategoryId(e.target.value)}
          required
        >
          <option value="" disabled>
            Selecione uma categoria
          </option>
          {props.categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={props.loading || !props.postName.trim() || !props.postBody.trim() || !props.categoryId}
      >
        {props.loading ? "Carregando..." : "Salvar"}
      </button>
    </form>
  )
}
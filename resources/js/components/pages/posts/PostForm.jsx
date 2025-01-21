import { useState } from 'react';

export default function PostForm(props) {

  const [banner, setBanner] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verifica se o banner está preenchido
    if (!banner) {
      alert("Por favor, selecione um banner.");
      return;
    }
  
    // Monta o objeto de dados com o banner
    const formData = new FormData();
    formData.append('banner', banner);
    formData.append('postName', props.postName);
    formData.append('postBody', props.postBody);
    formData.append('categoryId', props.categoryId);
  
    // Chama a função passada pelos props com os dados do formulário
    if (typeof props.onFormSubmit === "function") {
      props.onFormSubmit(formData);
    } else {
      console.error("onFormSubmit não foi fornecido ou não é uma função.");
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
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

      {/* Input de arquivo para o banner */}
      <div className="form-group">
        <label htmlFor="banner">Imagem (Banner)</label>
        <input
          name='banner'
          type="file"
          id="banner"
          className="form-control"
          onChange={handleFileChange}
          accept="image/*"
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
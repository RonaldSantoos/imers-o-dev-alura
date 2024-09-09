function pesquisar() {
   // Seleciona a seção onde os resultados serão exibidos
   let section = document.getElementById("resultados-pesquisa");
   let campoPesquisa = document.getElementById("campo-pesquisa").value

   if(! campoPesquisa){
    section.innerHTML = "<p>Nenhum atleta foi encontrado</p>"
    return
   }

   campoPesquisa = campoPesquisa.toLowerCase();
  
   // Inicializa uma string vazia para armazenar os resultados
   let resultados = "";
   let titulo = "";
   let posicao = "";
   let tags = "";
 
   // Itera sobre cada dado da pesquisa e constrói o HTML dos resultados
   for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        posicao = dado.posicao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if(titulo.includes(campoPesquisa) || posicao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados += `
          <div class="item-resultado">
            <h2>
            <a href="#" taget="_blank">${dado.titulo}</a> </h2>
            <p class="descricao-meta">${dado.posicao}</p> 
            <p class="descricao-meta">${dado.idade}</p> 
            <p class="descricao-meta">${dado.altura}</p> 
            <p class="descricao-meta">${dado.instagram}</p> </div> 
        `;
        } 
        dado.titulo.includes(campoPesquisa);  
     // Cria um novo elemento de resultado
   
     if (!resultados){
        resultados = "<p>Nenhum atleta foi encontrado, você precisa digitar o nome ou alguma característica do atleta</p>"    
     }

   }
 

   // Insere os resultados na seção HTML
   section.innerHTML = resultados;
 }



 
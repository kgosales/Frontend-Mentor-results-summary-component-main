fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
        let categoriaMenu = document.querySelector(".categoria-menu");
        let fragmento = document.createDocumentFragment();
        let l = data.length;
        for (let i = 0; i < l; i++) {
            let { icon, category, score, color, bgc } = data[i];

            let categoria = document.createElement("div");
            categoria.className = "categoria";
            categoria.style.backgroundColor = bgc

            let categoriaTitulo = document.createElement("div");
            categoriaTitulo.className = "categoria-titulo";

            let img = document.createElement("img");
            img.src = icon;
            img.alt = "icone";

            let titulo = document.createElement("p");
            titulo.textContent = category;
            titulo.style.color = color;

            categoriaTitulo.appendChild(img);
            categoriaTitulo.appendChild(titulo);
            categoria.appendChild(categoriaTitulo);

            let categoriaPontos = document.createElement("div");
            categoriaPontos.className = "categoria-pontos";

            let pontos = document.createElement("p");

            let span = document.createElement("span");
            span.textContent = score;

            pontos.appendChild(span);
            pontos.insertAdjacentText("beforeend", " / 100");

            categoriaPontos.appendChild(pontos);
            categoria.appendChild(categoriaPontos);

            fragmento.appendChild(categoria);
        }
        categoriaMenu.appendChild(fragmento);
    });

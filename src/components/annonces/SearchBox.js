import React from "react";

export default function SearchBox(props) {
  return (
    <div>
      <label className="label-search" htmlFor="selectedText">
        Entrez un produit
      </label>
      <input
        type="text"
        name="selectedText"
        id="inputEmail"
        className="form-control"
        onChange={e => props.onChange(e)}
      />
      <br />
      <label className="label-search" htmlFor="selectedAdresse">
        Entrez votre adresse
      </label>
      <input
        className="form-control"
        type="text"
        name="selectedAdresse"
        onChange={e => props.onChange(e)}
      />
      <br />
      <h6 className="label-search">Catégories</h6>
      <hr />
      <label htmlFor="selectedCategorie" className="categories">
        {" "}
        <i className="fas fa-apple-alt"></i> Fruits{"  "}
      </label>
      <input
        name="selectedCategorie"
        type="radio"
        value="fruits"
        checked={props.fruits}
        onChange={e => props.onChangeChecked(e)}
      />
      <br />
      <label
        className="label-search"
        htmlFor="selectedCategorie"
        className="categories"
      >
        <i className="fas fa-carrot"></i> Légumes{"  "}
      </label>
      <input
        name="selectedCategorie"
        value="légumes"
        type="radio"
        checked={props.légumes}
        onChange={e => props.onChangeChecked(e)}
      />
      <br />
      <label htmlFor="selectedCategorie" className="categories">
        <i className="fas fa-cookie"></i> Epicerie{"  "}
      </label>
      <input
        name="selectedCategorie"
        value="épicerie"
        type="radio"
        checked={props.épicerie}
        onChange={e => props.onChangeChecked(e)}
      />
      <br />
      <label htmlFor="selectedCategorie" className="categories">
        <i className="fas fa-pizza-slice"></i> Plats{"  "}
      </label>
      <input
        name="selectedCategorie"
        value="plats"
        type="radio"
        checked={props.plats}
        onChange={e => props.onChangeChecked(e)}
      />
      <br />
      <label className="categories" htmlFor="selectedCategorie">
        <i className="fas fa-shopping-basket"></i> Tout{"  "}
      </label>
      <input
        name="selectedCategorie"
        value=""
        type="radio"
        checked={props.tout}
        onChange={e => props.onChangeChecked(e)}
        defaultChecked
      />
      <br />
      <br />
      <h6 className="label-search">Statut</h6>
      <hr />
      <label className="categories" htmlFor="selectedStatut">
        <i className="fas fa-times"></i> Réservé{"  "}
      </label>
      <input
        name="selectedStatut"
        value="Réservé"
        type="radio"
        onChange={e => props.onChangeChecked2(e)}
      />
      <label className="categories" htmlFor="selectedStatut">
        <i className="fas fa-check"></i> Disponible{"  "}
      </label>
      <input
        name="selectedStatut"
        value="Disponible"
        type="radio"
        onChange={e => props.onChangeChecked2(e)}
      />{" "}
      <br />
      <label className="categories" htmlFor="selectedStatut">
        <i className="fas fa-shopping-basket"></i> Tout{"  "}
      </label>
      <input
        name="selectedStatut"
        value=""
        type="radio"
        onChange={e => props.onChangeChecked2(e)}
        defaultChecked
      />
    </div>
  );
}

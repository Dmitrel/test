<h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => getAll().then(setGoods)}
      >
        Load all goods
      </button>









      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => get5First().then(setGoods)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => getRed().then(setGoods)}
      >
        Load red goods
      </button>
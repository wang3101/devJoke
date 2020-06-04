import * as React from 'react';
// import { useDispatch } from 'react-redux';
// import
// props {setup: string, delivery: string, favorites: []}

const FavoritesDisplay = (props: any) => {
  // const dispatch = useDispatch()
  // Create favorites list. Wont't populate until button pressed
  const allFavorites = [];
  for (let i = 0; i < props.jokes.jokes.favorites.length; i++) {
    allFavorites.push(
      <div key={i}>
        <p>{props.jokes.jokes.favorites[i].setup}</p>
        <p>{props.jokes.jokes.favorites[i].delivery}</p>
        <hr></hr>
      </div>,
    );
  }
  return (
    <div className="displayBox">
      <h4>Here are your favorites:</h4>
      {allFavorites}
    </div>
  );
};
export default FavoritesDisplay;

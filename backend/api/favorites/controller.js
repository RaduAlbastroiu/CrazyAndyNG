class FavoritesController {
  constructor(model) {
    this.model = model;
  }

  async find(ownerId) {
    let found = this.model.findOne({ owner: ownerId });
    found = found.populate('products');
    const res = await Promise.all([found]);
    if (!res[0]) {
      throw 'not found';
    }

    return res[0];
  }

  async update(_ownerId, favoritesUpdate) {
    let oldFavorites = await this.model.findOne({ owner: _ownerId });

    // if no item in favorites
    if (!oldFavorites) {
      oldFavorites = {
        products: [],
        owner: _ownerId,
      };

      oldFavorites = new this.model(oldFavorites);
    }

    if (
      favoritesUpdate.add &&
      oldFavorites.products.indexOf(favoritesUpdate.add) < 0
    ) {
      oldFavorites.products.push(favoritesUpdate.add);
    }
    if (favoritesUpdate.remove) {
      let indexToRemove = oldFavorites.products.indexOf(favoritesUpdate.remove);
      if (indexToRemove > -1) {
        oldFavorites.products.splice(indexToRemove, 1);
      }
    }

    const newFavorites = await oldFavorites.save();
    return newFavorites;
  }

  async delete(_ownerId) {
    const found = await this.model.findOneAndDelete({ owner: _ownerId });
    if (!found) throw 'not found';
    return found;
  }
}

module.exports = FavoritesController;

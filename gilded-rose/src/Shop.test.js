import Shop from "./Shop";
import Item from "./Item";

/*
 * All items SellIn -> days to sell
 * All items Quality -> how valuable
 * End of day systemlowers -> SellIn Quality
 */

test("Test SellIn value not null", () => {
  const item = new Item("foo", 1, 3);
  const shop = new Shop([item]);

  expect(item.sellIn).not.toBeNull();
});

test("Test end of day Quality Value", () => {
  const item = new Item("foo", 1, 3);
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(2);
});

test("Test end of day SellIn Value", () => {
  const item = new Item("foo", 1, 3);
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.sellIn).toEqual(0);
});

test("Test Quality degrading when date is 0", () => {
  const item = new Item("foo", 0, 6);
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(4);
});

test("Test Quality is never negative", () => {
  const item = new Item("foo", 1, 0);
  const shop = new Shop([item]);

  shop.updateQuality();

  expect(item.quality).toEqual(0);
});

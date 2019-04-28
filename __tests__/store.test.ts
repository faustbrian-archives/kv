import "jest-extended";
import { StubStore } from "./stubs/store";

const items: Record<string, number> = {
	"1": 1,
	"2": 2,
	"3": 3,
	"4": 4,
	"5": 5,
};

const itemsBool: boolean[] = new Array(5).fill(true);

let store: StubStore<string, number>;
beforeEach(() => (store = new StubStore<string, number>()));

it("should get all of the items in the store.", () => {
	store.putMany(items);

	expect(store.all()).toEqual(Object.entries(items));
});

it("should get the keys of the store items.", () => {
	store.putMany(items);

	expect(store.keys()).toEqual(Object.keys(items));
});

it("should get the values of the store items.", () => {
	store.putMany(items);

	expect(store.values()).toEqual(Object.values(items));
});

it("should put an item into the store", () => {
	expect(store.put("1", 1)).toBeTrue();
});

it("should put many items into the store", () => {
	expect(store.putMany(items)).toEqual(itemsBool);
});

it("should be missing all items from the store", () => {
	for (const item of Object.keys(items)) {
		expect(store.missing(item)).toBeTrue();
	}
});

it("should remove an item from the store", () => {
	expect(store.put("1", 1)).toBeTrue();
	expect(store.forget("1")).toBeTrue();
});

it("should remove many items from the store", () => {
	expect(store.putMany(items)).toEqual(itemsBool);
	expect(store.forgetMany(Object.keys(items))).toEqual(itemsBool);
});

it("should remove all items from the store", () => {
	expect(store.putMany(items)).toEqual(itemsBool);
	expect(store.flush()).toBeTrue();
});

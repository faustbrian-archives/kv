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

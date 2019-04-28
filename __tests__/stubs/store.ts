import { IKeyValueStore } from "../../src/";

export class StubStore<K, T> implements IKeyValueStore<K, T> {
	private readonly store: Map<K, T> = new Map<K, T>();

	public all(): Array<[K, T]> {
		return [...this.store.entries()];
	}

	public keys(): K[] {
		return [...this.store.keys()];
	}

	public values(): T[] {
		return [...this.store.values()];
	}

	public get(key: K): T | undefined {
		return this.store.get(key);
	}

	public getMany(keys: K[]): Array<T | undefined> {
		return [...keys].map((key: K) => this.store.get(key));
	}

	public put(key: K, value: T): boolean {
		this.store.set(key, value);

		return this.store.has(key);
	}

	public putMany(values: Array<[K, T]>): boolean[] {
		// @ts-ignore
		return values.map((value: [K, T]) => this.put(value[0], value[1]));
	}

	public has(key: K): boolean {
		return this.store.has(key);
	}

	public hasMany(keys: K[]): boolean[] {
		return [...keys].map((key: K) => this.store.has(key));
	}

	public missing(key: K): boolean {
		return !this.has(key);
	}

	public missingMany(keys: K[]): boolean[] {
		return [...keys].map((key: K) => this.missing(key));
	}

	public forget(key: K): boolean {
		return this.store.delete(key);
	}

	public forgetMany(keys: K[]): boolean[] {
		return [...keys].map((key: K) => this.forget(key));
	}

	public flush(): boolean {
		this.store.clear();

		return this.count() === 0;
	}

	public count(): number {
		return this.store.size;
	}
}

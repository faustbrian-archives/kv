export interface IKeyValueStore<K, T> {
	/**
	 * Get all of the items in the store.
	 */
	all(): Record<string | number | symbol, T>;

	/**
	 * Get the keys of the store items.
	 */
	keys(): K[];

	/**
	 * Get the values of the store items.
	 */
	values(): T[];

	/**
	 * Retrieve an item from the store by key.
	 */
	get(key: K): T | undefined;

	/**
	 * Retrieve multiple items from the store by key.
	 */
	getMany(keys: K[]): Array<T | undefined>;

	/**
	 * Store an item in the store.
	 */
	put(key: K, value: T): boolean;

	/**
	 * Store multiple items in the store.
	 */
	putMany(values: Record<string | number | symbol, T>): boolean[];

	/**
	 * Determine if an item exists in the store.
	 */
	has(key: K): boolean;

	/**
	 * Determine if multiple items exist in the store.
	 */
	hasMany(keys: K[]): boolean[];

	/**
	 * Determine if an item doesn't exist in the store.
	 */
	missing(key: K): boolean;

	/**
	 * Determine if multiple items don't exist in the store.
	 */
	missingMany(keys: K[]): boolean[];

	/**
	 * Remove an item from the store.
	 */
	forget(key: K): boolean;

	/**
	 * Remove multiple items from the store.
	 */
	forgetMany(keys: K[]): boolean[];

	/**
	 * Remove all items from the store.
	 */
	flush(): boolean;

	/**
	 * Count the number of items in the store.
	 */
	count(): number;
}

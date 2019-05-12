export interface IKeyValueStoreAsync<K, T> {
	/**
	 * Get all of the items in the store.
	 */
	all(): Promise<Array<[K, T]>>;

	/**
	 * Get the keys of the store items.
	 */
	keys(): Promise<K[]>;

	/**
	 * Get the values of the store items.
	 */
	values(): Promise<T[]>;

	/**
	 * Retrieve an item from the store by key.
	 */
	get(key: K): Promise<T | undefined>;

	/**
	 * Retrieve multiple items from the store by key.
	 */
	getMany(keys: K[]): Promise<Array<T | undefined>>;

	/**
	 * Retrieve an item from the store and remove it.
	 */
	pull(key: K): Promise<T | undefined>;

	/**
	 * Retrieve multiple items from the store and remove them.
	 */
	pullMany(keys: K[]): Promise<Array<T | undefined>>;

	/**
	 * Store an item in the store.
	 */
	put(key: K, value: T): Promise<boolean>;

	/**
	 * Store multiple items in the store.
	 */
	putMany(values: Array<[K, T]>): Promise<boolean[]>;

	/**
	 * Determine if an item exists in the store.
	 */
	has(key: K): Promise<boolean>;

	/**
	 * Determine if multiple items exist in the store.
	 */
	hasMany(keys: K[]): Promise<boolean[]>;

	/**
	 * Determine if an item doesn't exist in the store.
	 */
	missing(key: K): Promise<boolean>;

	/**
	 * Determine if multiple items don't exist in the store.
	 */
	missingMany(keys: K[]): Promise<boolean[]>;

	/**
	 * Remove an item from the store.
	 */
	forget(key: K): Promise<boolean>;

	/**
	 * Remove multiple items from the store.
	 */
	forgetMany(keys: K[]): Promise<boolean[]>;

	/**
	 * Remove all items from the store.
	 */
	flush(): Promise<boolean>;

	/**
	 * Count the number of items in the store.
	 */
	count(): Promise<number>;

	/**
	 * Determine if the store is empty.
	 */
	isEmpty(): Promise<boolean>;

	/**
	 * Determine if the store is not empty.
	 */
	isNotEmpty(): Promise<boolean>;
}

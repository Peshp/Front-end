class KeyValue<T>{
    private key: T;
    private value: T;

    setkeyValue(key: T, value: T){
        this.key = key;
        this.value = value;
    }

    display(): string{
        return `key = ${this.key}, value = ${this.value}`;
    }
}
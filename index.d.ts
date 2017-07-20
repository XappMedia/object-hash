declare namespace ObjectHash {

    interface Options {
        /**
         * Hash algorithm to be used: "sha1", "md5", etc.
         * Default: sha1
         */
        algorithm: string;
        /**
         * Hash object keys. Values ignored.
         * Default: false
         */
        excludeValues: boolean;
        /**
         * Hash encoding. Supported "buffer", "hex", "binary", and "base64".
         * Default: hex
         */
        encoding: string;
        /**
         * Ignore unknown object types.
         * Default: false
         */
        ignoreUnknown: boolean;
        /**
         * Optional function that replaces values before hashing.
         * Default: Accept all values.
         */
        replacer(value: any): any;
        /**
         * Whether properties on functions are considered when hashing.
         * Default: true
         */
        respectingFunctionProperties: boolean;
        /**
         * Whether special type attributes (.prototype, .__proto__, .constructor) are hashed.
         * Default: true
         */
        respectType: boolean;
        /**
         * Sort all arrays using before hashing. Note that this afects all collections, i.e. including
         * typed arrays, Sets, Maps, etc.
         * Default: false
         */
        unorderedArrays: boolean;
        /**
         * Sort Set and Map instances before hashing. i.e. make hash(new Set([1, 2])) == hash(new Set([2, 1])) return true.
         * Default true
         */
        unorderedSets: boolean;
    }

    function hash(obj: any, options?: Options): string;

    namespace hash {
        /**
         * Hash using the sha1 algorithm.  Sugar method, equivalent to hash(value, { algorithm: 'sha1' })
         */
        function sha1(obj: any): string;

        /**
         * Hash using the md5 algorithm. Sugar method, equivalent to hash(value, { algorithm: 'md5' })
         */
        function MD5(obj: any): string;

        /**
         * Hash object keys using the md5 algorithm, values ignored. Sugar method, equivalent to hash(value, { algorithm: 'md5', excludeValues: true })
         */
        function keysMD5(obj: any): string;

        /**
         * Write the information that would otherwise have been hashed to a stream.
         */
        function writeToString(value, opts: Options, stream: any): void;
    }
}

declare module "object-hash" {
    export = ObjectHash;
}
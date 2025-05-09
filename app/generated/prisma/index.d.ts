
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model Commentaire
 * 
 */
export type Commentaire = $Result.DefaultSelection<Prisma.$CommentairePayload>
/**
 * Model Activite
 * 
 */
export type Activite = $Result.DefaultSelection<Prisma.$ActivitePayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model CheckListe_Item
 * 
 */
export type CheckListe_Item = $Result.DefaultSelection<Prisma.$CheckListe_ItemPayload>
/**
 * Model Formalite_administrative_Item
 * 
 */
export type Formalite_administrative_Item = $Result.DefaultSelection<Prisma.$Formalite_administrative_ItemPayload>
/**
 * Model fait_par
 * 
 */
export type fait_par = $Result.DefaultSelection<Prisma.$fait_parPayload>
/**
 * Model contient
 * 
 */
export type contient = $Result.DefaultSelection<Prisma.$contientPayload>
/**
 * Model requiert
 * 
 */
export type requiert = $Result.DefaultSelection<Prisma.$requiertPayload>
/**
 * Model cocher
 * 
 */
export type cocher = $Result.DefaultSelection<Prisma.$cocherPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentaire`: Exposes CRUD operations for the **Commentaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commentaires
    * const commentaires = await prisma.commentaire.findMany()
    * ```
    */
  get commentaire(): Prisma.CommentaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activite`: Exposes CRUD operations for the **Activite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activites
    * const activites = await prisma.activite.findMany()
    * ```
    */
  get activite(): Prisma.ActiviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkListe_Item`: Exposes CRUD operations for the **CheckListe_Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckListe_Items
    * const checkListe_Items = await prisma.checkListe_Item.findMany()
    * ```
    */
  get checkListe_Item(): Prisma.CheckListe_ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formalite_administrative_Item`: Exposes CRUD operations for the **Formalite_administrative_Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formalite_administrative_Items
    * const formalite_administrative_Items = await prisma.formalite_administrative_Item.findMany()
    * ```
    */
  get formalite_administrative_Item(): Prisma.Formalite_administrative_ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fait_par`: Exposes CRUD operations for the **fait_par** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fait_pars
    * const fait_pars = await prisma.fait_par.findMany()
    * ```
    */
  get fait_par(): Prisma.fait_parDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contient`: Exposes CRUD operations for the **contient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contients
    * const contients = await prisma.contient.findMany()
    * ```
    */
  get contient(): Prisma.contientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.requiert`: Exposes CRUD operations for the **requiert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requierts
    * const requierts = await prisma.requiert.findMany()
    * ```
    */
  get requiert(): Prisma.requiertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cocher`: Exposes CRUD operations for the **cocher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cochers
    * const cochers = await prisma.cocher.findMany()
    * ```
    */
  get cocher(): Prisma.cocherDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Utilisateur: 'Utilisateur',
    Destination: 'Destination',
    Commentaire: 'Commentaire',
    Activite: 'Activite',
    Contact: 'Contact',
    CheckListe_Item: 'CheckListe_Item',
    Formalite_administrative_Item: 'Formalite_administrative_Item',
    fait_par: 'fait_par',
    contient: 'contient',
    requiert: 'requiert',
    cocher: 'cocher'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "utilisateur" | "destination" | "commentaire" | "activite" | "contact" | "checkListe_Item" | "formalite_administrative_Item" | "fait_par" | "contient" | "requiert" | "cocher"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      Commentaire: {
        payload: Prisma.$CommentairePayload<ExtArgs>
        fields: Prisma.CommentaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findFirst: {
            args: Prisma.CommentaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findMany: {
            args: Prisma.CommentaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          create: {
            args: Prisma.CommentaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          createMany: {
            args: Prisma.CommentaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          delete: {
            args: Prisma.CommentaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          update: {
            args: Prisma.CommentaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          deleteMany: {
            args: Prisma.CommentaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          upsert: {
            args: Prisma.CommentaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          aggregate: {
            args: Prisma.CommentaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentaire>
          }
          groupBy: {
            args: Prisma.CommentaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentaireCountArgs<ExtArgs>
            result: $Utils.Optional<CommentaireCountAggregateOutputType> | number
          }
        }
      }
      Activite: {
        payload: Prisma.$ActivitePayload<ExtArgs>
        fields: Prisma.ActiviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActiviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActiviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          findFirst: {
            args: Prisma.ActiviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActiviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          findMany: {
            args: Prisma.ActiviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>[]
          }
          create: {
            args: Prisma.ActiviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          createMany: {
            args: Prisma.ActiviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActiviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>[]
          }
          delete: {
            args: Prisma.ActiviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          update: {
            args: Prisma.ActiviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          deleteMany: {
            args: Prisma.ActiviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActiviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActiviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>[]
          }
          upsert: {
            args: Prisma.ActiviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivitePayload>
          }
          aggregate: {
            args: Prisma.ActiviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivite>
          }
          groupBy: {
            args: Prisma.ActiviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActiviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActiviteCountArgs<ExtArgs>
            result: $Utils.Optional<ActiviteCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      CheckListe_Item: {
        payload: Prisma.$CheckListe_ItemPayload<ExtArgs>
        fields: Prisma.CheckListe_ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckListe_ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckListe_ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload>
          }
          findFirst: {
            args: Prisma.CheckListe_ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckListe_ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload>
          }
          findMany: {
            args: Prisma.CheckListe_ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload>[]
          }
          create: {
            args: Prisma.CheckListe_ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload>
          }
          createMany: {
            args: Prisma.CheckListe_ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckListe_ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload>[]
          }
          delete: {
            args: Prisma.CheckListe_ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload>
          }
          update: {
            args: Prisma.CheckListe_ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload>
          }
          deleteMany: {
            args: Prisma.CheckListe_ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckListe_ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckListe_ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload>[]
          }
          upsert: {
            args: Prisma.CheckListe_ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckListe_ItemPayload>
          }
          aggregate: {
            args: Prisma.CheckListe_ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckListe_Item>
          }
          groupBy: {
            args: Prisma.CheckListe_ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckListe_ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckListe_ItemCountArgs<ExtArgs>
            result: $Utils.Optional<CheckListe_ItemCountAggregateOutputType> | number
          }
        }
      }
      Formalite_administrative_Item: {
        payload: Prisma.$Formalite_administrative_ItemPayload<ExtArgs>
        fields: Prisma.Formalite_administrative_ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Formalite_administrative_ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Formalite_administrative_ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload>
          }
          findFirst: {
            args: Prisma.Formalite_administrative_ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Formalite_administrative_ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload>
          }
          findMany: {
            args: Prisma.Formalite_administrative_ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload>[]
          }
          create: {
            args: Prisma.Formalite_administrative_ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload>
          }
          createMany: {
            args: Prisma.Formalite_administrative_ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Formalite_administrative_ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload>[]
          }
          delete: {
            args: Prisma.Formalite_administrative_ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload>
          }
          update: {
            args: Prisma.Formalite_administrative_ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload>
          }
          deleteMany: {
            args: Prisma.Formalite_administrative_ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Formalite_administrative_ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Formalite_administrative_ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload>[]
          }
          upsert: {
            args: Prisma.Formalite_administrative_ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Formalite_administrative_ItemPayload>
          }
          aggregate: {
            args: Prisma.Formalite_administrative_ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormalite_administrative_Item>
          }
          groupBy: {
            args: Prisma.Formalite_administrative_ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Formalite_administrative_ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.Formalite_administrative_ItemCountArgs<ExtArgs>
            result: $Utils.Optional<Formalite_administrative_ItemCountAggregateOutputType> | number
          }
        }
      }
      fait_par: {
        payload: Prisma.$fait_parPayload<ExtArgs>
        fields: Prisma.fait_parFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fait_parFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fait_parFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload>
          }
          findFirst: {
            args: Prisma.fait_parFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fait_parFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload>
          }
          findMany: {
            args: Prisma.fait_parFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload>[]
          }
          create: {
            args: Prisma.fait_parCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload>
          }
          createMany: {
            args: Prisma.fait_parCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.fait_parCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload>[]
          }
          delete: {
            args: Prisma.fait_parDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload>
          }
          update: {
            args: Prisma.fait_parUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload>
          }
          deleteMany: {
            args: Prisma.fait_parDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fait_parUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.fait_parUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload>[]
          }
          upsert: {
            args: Prisma.fait_parUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fait_parPayload>
          }
          aggregate: {
            args: Prisma.Fait_parAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFait_par>
          }
          groupBy: {
            args: Prisma.fait_parGroupByArgs<ExtArgs>
            result: $Utils.Optional<Fait_parGroupByOutputType>[]
          }
          count: {
            args: Prisma.fait_parCountArgs<ExtArgs>
            result: $Utils.Optional<Fait_parCountAggregateOutputType> | number
          }
        }
      }
      contient: {
        payload: Prisma.$contientPayload<ExtArgs>
        fields: Prisma.contientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload>
          }
          findFirst: {
            args: Prisma.contientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload>
          }
          findMany: {
            args: Prisma.contientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload>[]
          }
          create: {
            args: Prisma.contientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload>
          }
          createMany: {
            args: Prisma.contientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.contientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload>[]
          }
          delete: {
            args: Prisma.contientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload>
          }
          update: {
            args: Prisma.contientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload>
          }
          deleteMany: {
            args: Prisma.contientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.contientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload>[]
          }
          upsert: {
            args: Prisma.contientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contientPayload>
          }
          aggregate: {
            args: Prisma.ContientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContient>
          }
          groupBy: {
            args: Prisma.contientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContientGroupByOutputType>[]
          }
          count: {
            args: Prisma.contientCountArgs<ExtArgs>
            result: $Utils.Optional<ContientCountAggregateOutputType> | number
          }
        }
      }
      requiert: {
        payload: Prisma.$requiertPayload<ExtArgs>
        fields: Prisma.requiertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.requiertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.requiertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload>
          }
          findFirst: {
            args: Prisma.requiertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.requiertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload>
          }
          findMany: {
            args: Prisma.requiertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload>[]
          }
          create: {
            args: Prisma.requiertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload>
          }
          createMany: {
            args: Prisma.requiertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.requiertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload>[]
          }
          delete: {
            args: Prisma.requiertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload>
          }
          update: {
            args: Prisma.requiertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload>
          }
          deleteMany: {
            args: Prisma.requiertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.requiertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.requiertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload>[]
          }
          upsert: {
            args: Prisma.requiertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$requiertPayload>
          }
          aggregate: {
            args: Prisma.RequiertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequiert>
          }
          groupBy: {
            args: Prisma.requiertGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequiertGroupByOutputType>[]
          }
          count: {
            args: Prisma.requiertCountArgs<ExtArgs>
            result: $Utils.Optional<RequiertCountAggregateOutputType> | number
          }
        }
      }
      cocher: {
        payload: Prisma.$cocherPayload<ExtArgs>
        fields: Prisma.cocherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cocherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cocherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload>
          }
          findFirst: {
            args: Prisma.cocherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cocherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload>
          }
          findMany: {
            args: Prisma.cocherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload>[]
          }
          create: {
            args: Prisma.cocherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload>
          }
          createMany: {
            args: Prisma.cocherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cocherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload>[]
          }
          delete: {
            args: Prisma.cocherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload>
          }
          update: {
            args: Prisma.cocherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload>
          }
          deleteMany: {
            args: Prisma.cocherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cocherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cocherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload>[]
          }
          upsert: {
            args: Prisma.cocherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cocherPayload>
          }
          aggregate: {
            args: Prisma.CocherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCocher>
          }
          groupBy: {
            args: Prisma.cocherGroupByArgs<ExtArgs>
            result: $Utils.Optional<CocherGroupByOutputType>[]
          }
          count: {
            args: Prisma.cocherCountArgs<ExtArgs>
            result: $Utils.Optional<CocherCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    utilisateur?: UtilisateurOmit
    destination?: DestinationOmit
    commentaire?: CommentaireOmit
    activite?: ActiviteOmit
    contact?: ContactOmit
    checkListe_Item?: CheckListe_ItemOmit
    formalite_administrative_Item?: Formalite_administrative_ItemOmit
    fait_par?: fait_parOmit
    contient?: contientOmit
    requiert?: requiertOmit
    cocher?: cocherOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    commentaires: number
    destinations: number
    coche_items: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentaires?: boolean | UtilisateurCountOutputTypeCountCommentairesArgs
    destinations?: boolean | UtilisateurCountOutputTypeCountDestinationsArgs
    coche_items?: boolean | UtilisateurCountOutputTypeCountCoche_itemsArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fait_parWhereInput
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountCoche_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cocherWhereInput
  }


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    commentaires: number
    activites: number
    utilisateurs: number
    checklist_items: number
    formalites: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentaires?: boolean | DestinationCountOutputTypeCountCommentairesArgs
    activites?: boolean | DestinationCountOutputTypeCountActivitesArgs
    utilisateurs?: boolean | DestinationCountOutputTypeCountUtilisateursArgs
    checklist_items?: boolean | DestinationCountOutputTypeCountChecklist_itemsArgs
    formalites?: boolean | DestinationCountOutputTypeCountFormalitesArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountActivitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiviteWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountUtilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fait_parWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountChecklist_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contientWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountFormalitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requiertWhereInput
  }


  /**
   * Count Type CheckListe_ItemCountOutputType
   */

  export type CheckListe_ItemCountOutputType = {
    destinations: number
    coche_utilisateurs: number
  }

  export type CheckListe_ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | CheckListe_ItemCountOutputTypeCountDestinationsArgs
    coche_utilisateurs?: boolean | CheckListe_ItemCountOutputTypeCountCoche_utilisateursArgs
  }

  // Custom InputTypes
  /**
   * CheckListe_ItemCountOutputType without action
   */
  export type CheckListe_ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_ItemCountOutputType
     */
    select?: CheckListe_ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CheckListe_ItemCountOutputType without action
   */
  export type CheckListe_ItemCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contientWhereInput
  }

  /**
   * CheckListe_ItemCountOutputType without action
   */
  export type CheckListe_ItemCountOutputTypeCountCoche_utilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cocherWhereInput
  }


  /**
   * Count Type Formalite_administrative_ItemCountOutputType
   */

  export type Formalite_administrative_ItemCountOutputType = {
    destinations: number
  }

  export type Formalite_administrative_ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | Formalite_administrative_ItemCountOutputTypeCountDestinationsArgs
  }

  // Custom InputTypes
  /**
   * Formalite_administrative_ItemCountOutputType without action
   */
  export type Formalite_administrative_ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_ItemCountOutputType
     */
    select?: Formalite_administrative_ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Formalite_administrative_ItemCountOutputType without action
   */
  export type Formalite_administrative_ItemCountOutputTypeCountDestinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requiertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id_utilisateur: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id_utilisateur: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id_utilisateur: number | null
    nom: string | null
    prenom: string | null
    mail: string | null
    mot_de_passe: string | null
    date_de_naissance: Date | null
    tel: string | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id_utilisateur: number | null
    nom: string | null
    prenom: string | null
    mail: string | null
    mot_de_passe: string | null
    date_de_naissance: Date | null
    tel: string | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id_utilisateur: number
    nom: number
    prenom: number
    mail: number
    mot_de_passe: number
    date_de_naissance: number
    tel: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id_utilisateur?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id_utilisateur?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id_utilisateur?: true
    nom?: true
    prenom?: true
    mail?: true
    mot_de_passe?: true
    date_de_naissance?: true
    tel?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id_utilisateur?: true
    nom?: true
    prenom?: true
    mail?: true
    mot_de_passe?: true
    date_de_naissance?: true
    tel?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id_utilisateur?: true
    nom?: true
    prenom?: true
    mail?: true
    mot_de_passe?: true
    date_de_naissance?: true
    tel?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id_utilisateur: number
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date
    tel: string
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_utilisateur?: boolean
    nom?: boolean
    prenom?: boolean
    mail?: boolean
    mot_de_passe?: boolean
    date_de_naissance?: boolean
    tel?: boolean
    commentaires?: boolean | Utilisateur$commentairesArgs<ExtArgs>
    destinations?: boolean | Utilisateur$destinationsArgs<ExtArgs>
    coche_items?: boolean | Utilisateur$coche_itemsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_utilisateur?: boolean
    nom?: boolean
    prenom?: boolean
    mail?: boolean
    mot_de_passe?: boolean
    date_de_naissance?: boolean
    tel?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_utilisateur?: boolean
    nom?: boolean
    prenom?: boolean
    mail?: boolean
    mot_de_passe?: boolean
    date_de_naissance?: boolean
    tel?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id_utilisateur?: boolean
    nom?: boolean
    prenom?: boolean
    mail?: boolean
    mot_de_passe?: boolean
    date_de_naissance?: boolean
    tel?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_utilisateur" | "nom" | "prenom" | "mail" | "mot_de_passe" | "date_de_naissance" | "tel", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentaires?: boolean | Utilisateur$commentairesArgs<ExtArgs>
    destinations?: boolean | Utilisateur$destinationsArgs<ExtArgs>
    coche_items?: boolean | Utilisateur$coche_itemsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
      destinations: Prisma.$fait_parPayload<ExtArgs>[]
      coche_items: Prisma.$cocherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_utilisateur: number
      nom: string
      prenom: string
      mail: string
      mot_de_passe: string
      date_de_naissance: Date
      tel: string
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id_utilisateur`
     * const utilisateurWithId_utilisateurOnly = await prisma.utilisateur.findMany({ select: { id_utilisateur: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id_utilisateur`
     * const utilisateurWithId_utilisateurOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id_utilisateur: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id_utilisateur`
     * const utilisateurWithId_utilisateurOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id_utilisateur: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commentaires<T extends Utilisateur$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destinations<T extends Utilisateur$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coche_items<T extends Utilisateur$coche_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$coche_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id_utilisateur: FieldRef<"Utilisateur", 'Int'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly prenom: FieldRef<"Utilisateur", 'String'>
    readonly mail: FieldRef<"Utilisateur", 'String'>
    readonly mot_de_passe: FieldRef<"Utilisateur", 'String'>
    readonly date_de_naissance: FieldRef<"Utilisateur", 'DateTime'>
    readonly tel: FieldRef<"Utilisateur", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.commentaires
   */
  export type Utilisateur$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Utilisateur.destinations
   */
  export type Utilisateur$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    where?: fait_parWhereInput
    orderBy?: fait_parOrderByWithRelationInput | fait_parOrderByWithRelationInput[]
    cursor?: fait_parWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Fait_parScalarFieldEnum | Fait_parScalarFieldEnum[]
  }

  /**
   * Utilisateur.coche_items
   */
  export type Utilisateur$coche_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    where?: cocherWhereInput
    orderBy?: cocherOrderByWithRelationInput | cocherOrderByWithRelationInput[]
    cursor?: cocherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CocherScalarFieldEnum | CocherScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationAvgAggregateOutputType = {
    id_destination: number | null
    avis_global: number | null
  }

  export type DestinationSumAggregateOutputType = {
    id_destination: number | null
    avis_global: number | null
  }

  export type DestinationMinAggregateOutputType = {
    id_destination: number | null
    pays: string | null
    region: string | null
    description: string | null
    avis_global: number | null
    image1: string | null
    image2: string | null
    image3: string | null
  }

  export type DestinationMaxAggregateOutputType = {
    id_destination: number | null
    pays: string | null
    region: string | null
    description: string | null
    avis_global: number | null
    image1: string | null
    image2: string | null
    image3: string | null
  }

  export type DestinationCountAggregateOutputType = {
    id_destination: number
    pays: number
    region: number
    description: number
    avis_global: number
    image1: number
    image2: number
    image3: number
    _all: number
  }


  export type DestinationAvgAggregateInputType = {
    id_destination?: true
    avis_global?: true
  }

  export type DestinationSumAggregateInputType = {
    id_destination?: true
    avis_global?: true
  }

  export type DestinationMinAggregateInputType = {
    id_destination?: true
    pays?: true
    region?: true
    description?: true
    avis_global?: true
    image1?: true
    image2?: true
    image3?: true
  }

  export type DestinationMaxAggregateInputType = {
    id_destination?: true
    pays?: true
    region?: true
    description?: true
    avis_global?: true
    image1?: true
    image2?: true
    image3?: true
  }

  export type DestinationCountAggregateInputType = {
    id_destination?: true
    pays?: true
    region?: true
    description?: true
    avis_global?: true
    image1?: true
    image2?: true
    image3?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _avg?: DestinationAvgAggregateInputType
    _sum?: DestinationSumAggregateInputType
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id_destination: number
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_destination?: boolean
    pays?: boolean
    region?: boolean
    description?: boolean
    avis_global?: boolean
    image1?: boolean
    image2?: boolean
    image3?: boolean
    commentaires?: boolean | Destination$commentairesArgs<ExtArgs>
    activites?: boolean | Destination$activitesArgs<ExtArgs>
    utilisateurs?: boolean | Destination$utilisateursArgs<ExtArgs>
    checklist_items?: boolean | Destination$checklist_itemsArgs<ExtArgs>
    formalites?: boolean | Destination$formalitesArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_destination?: boolean
    pays?: boolean
    region?: boolean
    description?: boolean
    avis_global?: boolean
    image1?: boolean
    image2?: boolean
    image3?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_destination?: boolean
    pays?: boolean
    region?: boolean
    description?: boolean
    avis_global?: boolean
    image1?: boolean
    image2?: boolean
    image3?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id_destination?: boolean
    pays?: boolean
    region?: boolean
    description?: boolean
    avis_global?: boolean
    image1?: boolean
    image2?: boolean
    image3?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_destination" | "pays" | "region" | "description" | "avis_global" | "image1" | "image2" | "image3", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentaires?: boolean | Destination$commentairesArgs<ExtArgs>
    activites?: boolean | Destination$activitesArgs<ExtArgs>
    utilisateurs?: boolean | Destination$utilisateursArgs<ExtArgs>
    checklist_items?: boolean | Destination$checklist_itemsArgs<ExtArgs>
    formalites?: boolean | Destination$formalitesArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
      activites: Prisma.$ActivitePayload<ExtArgs>[]
      utilisateurs: Prisma.$fait_parPayload<ExtArgs>[]
      checklist_items: Prisma.$contientPayload<ExtArgs>[]
      formalites: Prisma.$requiertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_destination: number
      pays: string
      region: string
      description: string
      avis_global: number
      image1: string
      image2: string
      image3: string
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id_destination`
     * const destinationWithId_destinationOnly = await prisma.destination.findMany({ select: { id_destination: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id_destination`
     * const destinationWithId_destinationOnly = await prisma.destination.createManyAndReturn({
     *   select: { id_destination: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {DestinationUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id_destination`
     * const destinationWithId_destinationOnly = await prisma.destination.updateManyAndReturn({
     *   select: { id_destination: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commentaires<T extends Destination$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, Destination$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activites<T extends Destination$activitesArgs<ExtArgs> = {}>(args?: Subset<T, Destination$activitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilisateurs<T extends Destination$utilisateursArgs<ExtArgs> = {}>(args?: Subset<T, Destination$utilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checklist_items<T extends Destination$checklist_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$checklist_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formalites<T extends Destination$formalitesArgs<ExtArgs> = {}>(args?: Subset<T, Destination$formalitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id_destination: FieldRef<"Destination", 'Int'>
    readonly pays: FieldRef<"Destination", 'String'>
    readonly region: FieldRef<"Destination", 'String'>
    readonly description: FieldRef<"Destination", 'String'>
    readonly avis_global: FieldRef<"Destination", 'Float'>
    readonly image1: FieldRef<"Destination", 'String'>
    readonly image2: FieldRef<"Destination", 'String'>
    readonly image3: FieldRef<"Destination", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
  }

  /**
   * Destination createManyAndReturn
   */
  export type DestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination updateManyAndReturn
   */
  export type DestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.commentaires
   */
  export type Destination$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Destination.activites
   */
  export type Destination$activitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    where?: ActiviteWhereInput
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    cursor?: ActiviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActiviteScalarFieldEnum | ActiviteScalarFieldEnum[]
  }

  /**
   * Destination.utilisateurs
   */
  export type Destination$utilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    where?: fait_parWhereInput
    orderBy?: fait_parOrderByWithRelationInput | fait_parOrderByWithRelationInput[]
    cursor?: fait_parWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Fait_parScalarFieldEnum | Fait_parScalarFieldEnum[]
  }

  /**
   * Destination.checklist_items
   */
  export type Destination$checklist_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    where?: contientWhereInput
    orderBy?: contientOrderByWithRelationInput | contientOrderByWithRelationInput[]
    cursor?: contientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContientScalarFieldEnum | ContientScalarFieldEnum[]
  }

  /**
   * Destination.formalites
   */
  export type Destination$formalitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    where?: requiertWhereInput
    orderBy?: requiertOrderByWithRelationInput | requiertOrderByWithRelationInput[]
    cursor?: requiertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequiertScalarFieldEnum | RequiertScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model Commentaire
   */

  export type AggregateCommentaire = {
    _count: CommentaireCountAggregateOutputType | null
    _avg: CommentaireAvgAggregateOutputType | null
    _sum: CommentaireSumAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  export type CommentaireAvgAggregateOutputType = {
    id_commentaire: number | null
    note: number | null
    utilisateurId: number | null
    destinationId: number | null
  }

  export type CommentaireSumAggregateOutputType = {
    id_commentaire: number | null
    note: number | null
    utilisateurId: number | null
    destinationId: number | null
  }

  export type CommentaireMinAggregateOutputType = {
    id_commentaire: number | null
    note: number | null
    contenu: string | null
    date_commentaire: Date | null
    image_commentaire: string | null
    utilisateurId: number | null
    destinationId: number | null
  }

  export type CommentaireMaxAggregateOutputType = {
    id_commentaire: number | null
    note: number | null
    contenu: string | null
    date_commentaire: Date | null
    image_commentaire: string | null
    utilisateurId: number | null
    destinationId: number | null
  }

  export type CommentaireCountAggregateOutputType = {
    id_commentaire: number
    note: number
    contenu: number
    date_commentaire: number
    image_commentaire: number
    utilisateurId: number
    destinationId: number
    _all: number
  }


  export type CommentaireAvgAggregateInputType = {
    id_commentaire?: true
    note?: true
    utilisateurId?: true
    destinationId?: true
  }

  export type CommentaireSumAggregateInputType = {
    id_commentaire?: true
    note?: true
    utilisateurId?: true
    destinationId?: true
  }

  export type CommentaireMinAggregateInputType = {
    id_commentaire?: true
    note?: true
    contenu?: true
    date_commentaire?: true
    image_commentaire?: true
    utilisateurId?: true
    destinationId?: true
  }

  export type CommentaireMaxAggregateInputType = {
    id_commentaire?: true
    note?: true
    contenu?: true
    date_commentaire?: true
    image_commentaire?: true
    utilisateurId?: true
    destinationId?: true
  }

  export type CommentaireCountAggregateInputType = {
    id_commentaire?: true
    note?: true
    contenu?: true
    date_commentaire?: true
    image_commentaire?: true
    utilisateurId?: true
    destinationId?: true
    _all?: true
  }

  export type CommentaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaire to aggregate.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commentaires
    **/
    _count?: true | CommentaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentaireMaxAggregateInputType
  }

  export type GetCommentaireAggregateType<T extends CommentaireAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentaire[P]>
      : GetScalarType<T[P], AggregateCommentaire[P]>
  }




  export type CommentaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithAggregationInput | CommentaireOrderByWithAggregationInput[]
    by: CommentaireScalarFieldEnum[] | CommentaireScalarFieldEnum
    having?: CommentaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentaireCountAggregateInputType | true
    _avg?: CommentaireAvgAggregateInputType
    _sum?: CommentaireSumAggregateInputType
    _min?: CommentaireMinAggregateInputType
    _max?: CommentaireMaxAggregateInputType
  }

  export type CommentaireGroupByOutputType = {
    id_commentaire: number
    note: number
    contenu: string
    date_commentaire: Date
    image_commentaire: string | null
    utilisateurId: number
    destinationId: number
    _count: CommentaireCountAggregateOutputType | null
    _avg: CommentaireAvgAggregateOutputType | null
    _sum: CommentaireSumAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  type GetCommentaireGroupByPayload<T extends CommentaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
            : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
        }
      >
    >


  export type CommentaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commentaire?: boolean
    note?: boolean
    contenu?: boolean
    date_commentaire?: boolean
    image_commentaire?: boolean
    utilisateurId?: boolean
    destinationId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commentaire?: boolean
    note?: boolean
    contenu?: boolean
    date_commentaire?: boolean
    image_commentaire?: boolean
    utilisateurId?: boolean
    destinationId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_commentaire?: boolean
    note?: boolean
    contenu?: boolean
    date_commentaire?: boolean
    image_commentaire?: boolean
    utilisateurId?: boolean
    destinationId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectScalar = {
    id_commentaire?: boolean
    note?: boolean
    contenu?: boolean
    date_commentaire?: boolean
    image_commentaire?: boolean
    utilisateurId?: boolean
    destinationId?: boolean
  }

  export type CommentaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_commentaire" | "note" | "contenu" | "date_commentaire" | "image_commentaire" | "utilisateurId" | "destinationId", ExtArgs["result"]["commentaire"]>
  export type CommentaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $CommentairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commentaire"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_commentaire: number
      note: number
      contenu: string
      date_commentaire: Date
      image_commentaire: string | null
      utilisateurId: number
      destinationId: number
    }, ExtArgs["result"]["commentaire"]>
    composites: {}
  }

  type CommentaireGetPayload<S extends boolean | null | undefined | CommentaireDefaultArgs> = $Result.GetResult<Prisma.$CommentairePayload, S>

  type CommentaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentaireCountAggregateInputType | true
    }

  export interface CommentaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commentaire'], meta: { name: 'Commentaire' } }
    /**
     * Find zero or one Commentaire that matches the filter.
     * @param {CommentaireFindUniqueArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentaireFindUniqueArgs>(args: SelectSubset<T, CommentaireFindUniqueArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commentaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentaireFindUniqueOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentaireFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentaireFindFirstArgs>(args?: SelectSubset<T, CommentaireFindFirstArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentaireFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commentaires
     * const commentaires = await prisma.commentaire.findMany()
     * 
     * // Get first 10 Commentaires
     * const commentaires = await prisma.commentaire.findMany({ take: 10 })
     * 
     * // Only select the `id_commentaire`
     * const commentaireWithId_commentaireOnly = await prisma.commentaire.findMany({ select: { id_commentaire: true } })
     * 
     */
    findMany<T extends CommentaireFindManyArgs>(args?: SelectSubset<T, CommentaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commentaire.
     * @param {CommentaireCreateArgs} args - Arguments to create a Commentaire.
     * @example
     * // Create one Commentaire
     * const Commentaire = await prisma.commentaire.create({
     *   data: {
     *     // ... data to create a Commentaire
     *   }
     * })
     * 
     */
    create<T extends CommentaireCreateArgs>(args: SelectSubset<T, CommentaireCreateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commentaires.
     * @param {CommentaireCreateManyArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentaireCreateManyArgs>(args?: SelectSubset<T, CommentaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commentaires and returns the data saved in the database.
     * @param {CommentaireCreateManyAndReturnArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commentaires and only return the `id_commentaire`
     * const commentaireWithId_commentaireOnly = await prisma.commentaire.createManyAndReturn({
     *   select: { id_commentaire: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentaireCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commentaire.
     * @param {CommentaireDeleteArgs} args - Arguments to delete one Commentaire.
     * @example
     * // Delete one Commentaire
     * const Commentaire = await prisma.commentaire.delete({
     *   where: {
     *     // ... filter to delete one Commentaire
     *   }
     * })
     * 
     */
    delete<T extends CommentaireDeleteArgs>(args: SelectSubset<T, CommentaireDeleteArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commentaire.
     * @param {CommentaireUpdateArgs} args - Arguments to update one Commentaire.
     * @example
     * // Update one Commentaire
     * const commentaire = await prisma.commentaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentaireUpdateArgs>(args: SelectSubset<T, CommentaireUpdateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commentaires.
     * @param {CommentaireDeleteManyArgs} args - Arguments to filter Commentaires to delete.
     * @example
     * // Delete a few Commentaires
     * const { count } = await prisma.commentaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentaireDeleteManyArgs>(args?: SelectSubset<T, CommentaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentaireUpdateManyArgs>(args: SelectSubset<T, CommentaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires and returns the data updated in the database.
     * @param {CommentaireUpdateManyAndReturnArgs} args - Arguments to update many Commentaires.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commentaires and only return the `id_commentaire`
     * const commentaireWithId_commentaireOnly = await prisma.commentaire.updateManyAndReturn({
     *   select: { id_commentaire: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentaireUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commentaire.
     * @param {CommentaireUpsertArgs} args - Arguments to update or create a Commentaire.
     * @example
     * // Update or create a Commentaire
     * const commentaire = await prisma.commentaire.upsert({
     *   create: {
     *     // ... data to create a Commentaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commentaire we want to update
     *   }
     * })
     */
    upsert<T extends CommentaireUpsertArgs>(args: SelectSubset<T, CommentaireUpsertArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireCountArgs} args - Arguments to filter Commentaires to count.
     * @example
     * // Count the number of Commentaires
     * const count = await prisma.commentaire.count({
     *   where: {
     *     // ... the filter for the Commentaires we want to count
     *   }
     * })
    **/
    count<T extends CommentaireCountArgs>(
      args?: Subset<T, CommentaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentaireAggregateArgs>(args: Subset<T, CommentaireAggregateArgs>): Prisma.PrismaPromise<GetCommentaireAggregateType<T>>

    /**
     * Group by Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentaireGroupByArgs['orderBy'] }
        : { orderBy?: CommentaireGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commentaire model
   */
  readonly fields: CommentaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commentaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commentaire model
   */
  interface CommentaireFieldRefs {
    readonly id_commentaire: FieldRef<"Commentaire", 'Int'>
    readonly note: FieldRef<"Commentaire", 'Int'>
    readonly contenu: FieldRef<"Commentaire", 'String'>
    readonly date_commentaire: FieldRef<"Commentaire", 'DateTime'>
    readonly image_commentaire: FieldRef<"Commentaire", 'String'>
    readonly utilisateurId: FieldRef<"Commentaire", 'Int'>
    readonly destinationId: FieldRef<"Commentaire", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Commentaire findUnique
   */
  export type CommentaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findUniqueOrThrow
   */
  export type CommentaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findFirst
   */
  export type CommentaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findFirstOrThrow
   */
  export type CommentaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findMany
   */
  export type CommentaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire create
   */
  export type CommentaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Commentaire.
     */
    data: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
  }

  /**
   * Commentaire createMany
   */
  export type CommentaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
  }

  /**
   * Commentaire createManyAndReturn
   */
  export type CommentaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire update
   */
  export type CommentaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Commentaire.
     */
    data: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
    /**
     * Choose, which Commentaire to update.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire updateMany
   */
  export type CommentaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
  }

  /**
   * Commentaire updateManyAndReturn
   */
  export type CommentaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire upsert
   */
  export type CommentaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Commentaire to update in case it exists.
     */
    where: CommentaireWhereUniqueInput
    /**
     * In case the Commentaire found by the `where` argument doesn't exist, create a new Commentaire with this data.
     */
    create: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
    /**
     * In case the Commentaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
  }

  /**
   * Commentaire delete
   */
  export type CommentaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter which Commentaire to delete.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire deleteMany
   */
  export type CommentaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaires to delete
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to delete.
     */
    limit?: number
  }

  /**
   * Commentaire without action
   */
  export type CommentaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
  }


  /**
   * Model Activite
   */

  export type AggregateActivite = {
    _count: ActiviteCountAggregateOutputType | null
    _avg: ActiviteAvgAggregateOutputType | null
    _sum: ActiviteSumAggregateOutputType | null
    _min: ActiviteMinAggregateOutputType | null
    _max: ActiviteMaxAggregateOutputType | null
  }

  export type ActiviteAvgAggregateOutputType = {
    id_activite: number | null
    destinationId: number | null
  }

  export type ActiviteSumAggregateOutputType = {
    id_activite: number | null
    destinationId: number | null
  }

  export type ActiviteMinAggregateOutputType = {
    id_activite: number | null
    nom_activite: string | null
    description_activite: string | null
    image_activite: string | null
    destinationId: number | null
  }

  export type ActiviteMaxAggregateOutputType = {
    id_activite: number | null
    nom_activite: string | null
    description_activite: string | null
    image_activite: string | null
    destinationId: number | null
  }

  export type ActiviteCountAggregateOutputType = {
    id_activite: number
    nom_activite: number
    description_activite: number
    image_activite: number
    destinationId: number
    _all: number
  }


  export type ActiviteAvgAggregateInputType = {
    id_activite?: true
    destinationId?: true
  }

  export type ActiviteSumAggregateInputType = {
    id_activite?: true
    destinationId?: true
  }

  export type ActiviteMinAggregateInputType = {
    id_activite?: true
    nom_activite?: true
    description_activite?: true
    image_activite?: true
    destinationId?: true
  }

  export type ActiviteMaxAggregateInputType = {
    id_activite?: true
    nom_activite?: true
    description_activite?: true
    image_activite?: true
    destinationId?: true
  }

  export type ActiviteCountAggregateInputType = {
    id_activite?: true
    nom_activite?: true
    description_activite?: true
    image_activite?: true
    destinationId?: true
    _all?: true
  }

  export type ActiviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activite to aggregate.
     */
    where?: ActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activites to fetch.
     */
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activites
    **/
    _count?: true | ActiviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActiviteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActiviteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActiviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActiviteMaxAggregateInputType
  }

  export type GetActiviteAggregateType<T extends ActiviteAggregateArgs> = {
        [P in keyof T & keyof AggregateActivite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivite[P]>
      : GetScalarType<T[P], AggregateActivite[P]>
  }




  export type ActiviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActiviteWhereInput
    orderBy?: ActiviteOrderByWithAggregationInput | ActiviteOrderByWithAggregationInput[]
    by: ActiviteScalarFieldEnum[] | ActiviteScalarFieldEnum
    having?: ActiviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActiviteCountAggregateInputType | true
    _avg?: ActiviteAvgAggregateInputType
    _sum?: ActiviteSumAggregateInputType
    _min?: ActiviteMinAggregateInputType
    _max?: ActiviteMaxAggregateInputType
  }

  export type ActiviteGroupByOutputType = {
    id_activite: number
    nom_activite: string
    description_activite: string
    image_activite: string | null
    destinationId: number
    _count: ActiviteCountAggregateOutputType | null
    _avg: ActiviteAvgAggregateOutputType | null
    _sum: ActiviteSumAggregateOutputType | null
    _min: ActiviteMinAggregateOutputType | null
    _max: ActiviteMaxAggregateOutputType | null
  }

  type GetActiviteGroupByPayload<T extends ActiviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActiviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActiviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActiviteGroupByOutputType[P]>
            : GetScalarType<T[P], ActiviteGroupByOutputType[P]>
        }
      >
    >


  export type ActiviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_activite?: boolean
    nom_activite?: boolean
    description_activite?: boolean
    image_activite?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activite"]>

  export type ActiviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_activite?: boolean
    nom_activite?: boolean
    description_activite?: boolean
    image_activite?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activite"]>

  export type ActiviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_activite?: boolean
    nom_activite?: boolean
    description_activite?: boolean
    image_activite?: boolean
    destinationId?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activite"]>

  export type ActiviteSelectScalar = {
    id_activite?: boolean
    nom_activite?: boolean
    description_activite?: boolean
    image_activite?: boolean
    destinationId?: boolean
  }

  export type ActiviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_activite" | "nom_activite" | "description_activite" | "image_activite" | "destinationId", ExtArgs["result"]["activite"]>
  export type ActiviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type ActiviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type ActiviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $ActivitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activite"
    objects: {
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_activite: number
      nom_activite: string
      description_activite: string
      image_activite: string | null
      destinationId: number
    }, ExtArgs["result"]["activite"]>
    composites: {}
  }

  type ActiviteGetPayload<S extends boolean | null | undefined | ActiviteDefaultArgs> = $Result.GetResult<Prisma.$ActivitePayload, S>

  type ActiviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActiviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActiviteCountAggregateInputType | true
    }

  export interface ActiviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activite'], meta: { name: 'Activite' } }
    /**
     * Find zero or one Activite that matches the filter.
     * @param {ActiviteFindUniqueArgs} args - Arguments to find a Activite
     * @example
     * // Get one Activite
     * const activite = await prisma.activite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActiviteFindUniqueArgs>(args: SelectSubset<T, ActiviteFindUniqueArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Activite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActiviteFindUniqueOrThrowArgs} args - Arguments to find a Activite
     * @example
     * // Get one Activite
     * const activite = await prisma.activite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActiviteFindUniqueOrThrowArgs>(args: SelectSubset<T, ActiviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteFindFirstArgs} args - Arguments to find a Activite
     * @example
     * // Get one Activite
     * const activite = await prisma.activite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActiviteFindFirstArgs>(args?: SelectSubset<T, ActiviteFindFirstArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Activite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteFindFirstOrThrowArgs} args - Arguments to find a Activite
     * @example
     * // Get one Activite
     * const activite = await prisma.activite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActiviteFindFirstOrThrowArgs>(args?: SelectSubset<T, ActiviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Activites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activites
     * const activites = await prisma.activite.findMany()
     * 
     * // Get first 10 Activites
     * const activites = await prisma.activite.findMany({ take: 10 })
     * 
     * // Only select the `id_activite`
     * const activiteWithId_activiteOnly = await prisma.activite.findMany({ select: { id_activite: true } })
     * 
     */
    findMany<T extends ActiviteFindManyArgs>(args?: SelectSubset<T, ActiviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Activite.
     * @param {ActiviteCreateArgs} args - Arguments to create a Activite.
     * @example
     * // Create one Activite
     * const Activite = await prisma.activite.create({
     *   data: {
     *     // ... data to create a Activite
     *   }
     * })
     * 
     */
    create<T extends ActiviteCreateArgs>(args: SelectSubset<T, ActiviteCreateArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Activites.
     * @param {ActiviteCreateManyArgs} args - Arguments to create many Activites.
     * @example
     * // Create many Activites
     * const activite = await prisma.activite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActiviteCreateManyArgs>(args?: SelectSubset<T, ActiviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activites and returns the data saved in the database.
     * @param {ActiviteCreateManyAndReturnArgs} args - Arguments to create many Activites.
     * @example
     * // Create many Activites
     * const activite = await prisma.activite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activites and only return the `id_activite`
     * const activiteWithId_activiteOnly = await prisma.activite.createManyAndReturn({
     *   select: { id_activite: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActiviteCreateManyAndReturnArgs>(args?: SelectSubset<T, ActiviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Activite.
     * @param {ActiviteDeleteArgs} args - Arguments to delete one Activite.
     * @example
     * // Delete one Activite
     * const Activite = await prisma.activite.delete({
     *   where: {
     *     // ... filter to delete one Activite
     *   }
     * })
     * 
     */
    delete<T extends ActiviteDeleteArgs>(args: SelectSubset<T, ActiviteDeleteArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Activite.
     * @param {ActiviteUpdateArgs} args - Arguments to update one Activite.
     * @example
     * // Update one Activite
     * const activite = await prisma.activite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActiviteUpdateArgs>(args: SelectSubset<T, ActiviteUpdateArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Activites.
     * @param {ActiviteDeleteManyArgs} args - Arguments to filter Activites to delete.
     * @example
     * // Delete a few Activites
     * const { count } = await prisma.activite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActiviteDeleteManyArgs>(args?: SelectSubset<T, ActiviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activites
     * const activite = await prisma.activite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActiviteUpdateManyArgs>(args: SelectSubset<T, ActiviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activites and returns the data updated in the database.
     * @param {ActiviteUpdateManyAndReturnArgs} args - Arguments to update many Activites.
     * @example
     * // Update many Activites
     * const activite = await prisma.activite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Activites and only return the `id_activite`
     * const activiteWithId_activiteOnly = await prisma.activite.updateManyAndReturn({
     *   select: { id_activite: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActiviteUpdateManyAndReturnArgs>(args: SelectSubset<T, ActiviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Activite.
     * @param {ActiviteUpsertArgs} args - Arguments to update or create a Activite.
     * @example
     * // Update or create a Activite
     * const activite = await prisma.activite.upsert({
     *   create: {
     *     // ... data to create a Activite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activite we want to update
     *   }
     * })
     */
    upsert<T extends ActiviteUpsertArgs>(args: SelectSubset<T, ActiviteUpsertArgs<ExtArgs>>): Prisma__ActiviteClient<$Result.GetResult<Prisma.$ActivitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Activites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteCountArgs} args - Arguments to filter Activites to count.
     * @example
     * // Count the number of Activites
     * const count = await prisma.activite.count({
     *   where: {
     *     // ... the filter for the Activites we want to count
     *   }
     * })
    **/
    count<T extends ActiviteCountArgs>(
      args?: Subset<T, ActiviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActiviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActiviteAggregateArgs>(args: Subset<T, ActiviteAggregateArgs>): Prisma.PrismaPromise<GetActiviteAggregateType<T>>

    /**
     * Group by Activite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActiviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActiviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActiviteGroupByArgs['orderBy'] }
        : { orderBy?: ActiviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActiviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActiviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activite model
   */
  readonly fields: ActiviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActiviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activite model
   */
  interface ActiviteFieldRefs {
    readonly id_activite: FieldRef<"Activite", 'Int'>
    readonly nom_activite: FieldRef<"Activite", 'String'>
    readonly description_activite: FieldRef<"Activite", 'String'>
    readonly image_activite: FieldRef<"Activite", 'String'>
    readonly destinationId: FieldRef<"Activite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Activite findUnique
   */
  export type ActiviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activite to fetch.
     */
    where: ActiviteWhereUniqueInput
  }

  /**
   * Activite findUniqueOrThrow
   */
  export type ActiviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activite to fetch.
     */
    where: ActiviteWhereUniqueInput
  }

  /**
   * Activite findFirst
   */
  export type ActiviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activite to fetch.
     */
    where?: ActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activites to fetch.
     */
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activites.
     */
    cursor?: ActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activites.
     */
    distinct?: ActiviteScalarFieldEnum | ActiviteScalarFieldEnum[]
  }

  /**
   * Activite findFirstOrThrow
   */
  export type ActiviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activite to fetch.
     */
    where?: ActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activites to fetch.
     */
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activites.
     */
    cursor?: ActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activites.
     */
    distinct?: ActiviteScalarFieldEnum | ActiviteScalarFieldEnum[]
  }

  /**
   * Activite findMany
   */
  export type ActiviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter, which Activites to fetch.
     */
    where?: ActiviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activites to fetch.
     */
    orderBy?: ActiviteOrderByWithRelationInput | ActiviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activites.
     */
    cursor?: ActiviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activites.
     */
    skip?: number
    distinct?: ActiviteScalarFieldEnum | ActiviteScalarFieldEnum[]
  }

  /**
   * Activite create
   */
  export type ActiviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * The data needed to create a Activite.
     */
    data: XOR<ActiviteCreateInput, ActiviteUncheckedCreateInput>
  }

  /**
   * Activite createMany
   */
  export type ActiviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activites.
     */
    data: ActiviteCreateManyInput | ActiviteCreateManyInput[]
  }

  /**
   * Activite createManyAndReturn
   */
  export type ActiviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * The data used to create many Activites.
     */
    data: ActiviteCreateManyInput | ActiviteCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activite update
   */
  export type ActiviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * The data needed to update a Activite.
     */
    data: XOR<ActiviteUpdateInput, ActiviteUncheckedUpdateInput>
    /**
     * Choose, which Activite to update.
     */
    where: ActiviteWhereUniqueInput
  }

  /**
   * Activite updateMany
   */
  export type ActiviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activites.
     */
    data: XOR<ActiviteUpdateManyMutationInput, ActiviteUncheckedUpdateManyInput>
    /**
     * Filter which Activites to update
     */
    where?: ActiviteWhereInput
    /**
     * Limit how many Activites to update.
     */
    limit?: number
  }

  /**
   * Activite updateManyAndReturn
   */
  export type ActiviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * The data used to update Activites.
     */
    data: XOR<ActiviteUpdateManyMutationInput, ActiviteUncheckedUpdateManyInput>
    /**
     * Filter which Activites to update
     */
    where?: ActiviteWhereInput
    /**
     * Limit how many Activites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activite upsert
   */
  export type ActiviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * The filter to search for the Activite to update in case it exists.
     */
    where: ActiviteWhereUniqueInput
    /**
     * In case the Activite found by the `where` argument doesn't exist, create a new Activite with this data.
     */
    create: XOR<ActiviteCreateInput, ActiviteUncheckedCreateInput>
    /**
     * In case the Activite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActiviteUpdateInput, ActiviteUncheckedUpdateInput>
  }

  /**
   * Activite delete
   */
  export type ActiviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
    /**
     * Filter which Activite to delete.
     */
    where: ActiviteWhereUniqueInput
  }

  /**
   * Activite deleteMany
   */
  export type ActiviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activites to delete
     */
    where?: ActiviteWhereInput
    /**
     * Limit how many Activites to delete.
     */
    limit?: number
  }

  /**
   * Activite without action
   */
  export type ActiviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activite
     */
    select?: ActiviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Activite
     */
    omit?: ActiviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActiviteInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id_contact: number | null
  }

  export type ContactSumAggregateOutputType = {
    id_contact: number | null
  }

  export type ContactMinAggregateOutputType = {
    id_contact: number | null
    nom: string | null
    prenom: string | null
    mail: string | null
    message: string | null
    date_envoie: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id_contact: number | null
    nom: string | null
    prenom: string | null
    mail: string | null
    message: string | null
    date_envoie: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id_contact: number
    nom: number
    prenom: number
    mail: number
    message: number
    date_envoie: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id_contact?: true
  }

  export type ContactSumAggregateInputType = {
    id_contact?: true
  }

  export type ContactMinAggregateInputType = {
    id_contact?: true
    nom?: true
    prenom?: true
    mail?: true
    message?: true
    date_envoie?: true
  }

  export type ContactMaxAggregateInputType = {
    id_contact?: true
    nom?: true
    prenom?: true
    mail?: true
    message?: true
    date_envoie?: true
  }

  export type ContactCountAggregateInputType = {
    id_contact?: true
    nom?: true
    prenom?: true
    mail?: true
    message?: true
    date_envoie?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id_contact: number
    nom: string
    prenom: string
    mail: string
    message: string
    date_envoie: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contact?: boolean
    nom?: boolean
    prenom?: boolean
    mail?: boolean
    message?: boolean
    date_envoie?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contact?: boolean
    nom?: boolean
    prenom?: boolean
    mail?: boolean
    message?: boolean
    date_envoie?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_contact?: boolean
    nom?: boolean
    prenom?: boolean
    mail?: boolean
    message?: boolean
    date_envoie?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id_contact?: boolean
    nom?: boolean
    prenom?: boolean
    mail?: boolean
    message?: boolean
    date_envoie?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_contact" | "nom" | "prenom" | "mail" | "message" | "date_envoie", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_contact: number
      nom: string
      prenom: string
      mail: string
      message: string
      date_envoie: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id_contact`
     * const contactWithId_contactOnly = await prisma.contact.findMany({ select: { id_contact: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id_contact`
     * const contactWithId_contactOnly = await prisma.contact.createManyAndReturn({
     *   select: { id_contact: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id_contact`
     * const contactWithId_contactOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id_contact: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id_contact: FieldRef<"Contact", 'Int'>
    readonly nom: FieldRef<"Contact", 'String'>
    readonly prenom: FieldRef<"Contact", 'String'>
    readonly mail: FieldRef<"Contact", 'String'>
    readonly message: FieldRef<"Contact", 'String'>
    readonly date_envoie: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model CheckListe_Item
   */

  export type AggregateCheckListe_Item = {
    _count: CheckListe_ItemCountAggregateOutputType | null
    _avg: CheckListe_ItemAvgAggregateOutputType | null
    _sum: CheckListe_ItemSumAggregateOutputType | null
    _min: CheckListe_ItemMinAggregateOutputType | null
    _max: CheckListe_ItemMaxAggregateOutputType | null
  }

  export type CheckListe_ItemAvgAggregateOutputType = {
    id_checkliste_item: number | null
  }

  export type CheckListe_ItemSumAggregateOutputType = {
    id_checkliste_item: number | null
  }

  export type CheckListe_ItemMinAggregateOutputType = {
    id_checkliste_item: number | null
    nom_item: string | null
  }

  export type CheckListe_ItemMaxAggregateOutputType = {
    id_checkliste_item: number | null
    nom_item: string | null
  }

  export type CheckListe_ItemCountAggregateOutputType = {
    id_checkliste_item: number
    nom_item: number
    _all: number
  }


  export type CheckListe_ItemAvgAggregateInputType = {
    id_checkliste_item?: true
  }

  export type CheckListe_ItemSumAggregateInputType = {
    id_checkliste_item?: true
  }

  export type CheckListe_ItemMinAggregateInputType = {
    id_checkliste_item?: true
    nom_item?: true
  }

  export type CheckListe_ItemMaxAggregateInputType = {
    id_checkliste_item?: true
    nom_item?: true
  }

  export type CheckListe_ItemCountAggregateInputType = {
    id_checkliste_item?: true
    nom_item?: true
    _all?: true
  }

  export type CheckListe_ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckListe_Item to aggregate.
     */
    where?: CheckListe_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckListe_Items to fetch.
     */
    orderBy?: CheckListe_ItemOrderByWithRelationInput | CheckListe_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckListe_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckListe_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckListe_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckListe_Items
    **/
    _count?: true | CheckListe_ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckListe_ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckListe_ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckListe_ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckListe_ItemMaxAggregateInputType
  }

  export type GetCheckListe_ItemAggregateType<T extends CheckListe_ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckListe_Item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckListe_Item[P]>
      : GetScalarType<T[P], AggregateCheckListe_Item[P]>
  }




  export type CheckListe_ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckListe_ItemWhereInput
    orderBy?: CheckListe_ItemOrderByWithAggregationInput | CheckListe_ItemOrderByWithAggregationInput[]
    by: CheckListe_ItemScalarFieldEnum[] | CheckListe_ItemScalarFieldEnum
    having?: CheckListe_ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckListe_ItemCountAggregateInputType | true
    _avg?: CheckListe_ItemAvgAggregateInputType
    _sum?: CheckListe_ItemSumAggregateInputType
    _min?: CheckListe_ItemMinAggregateInputType
    _max?: CheckListe_ItemMaxAggregateInputType
  }

  export type CheckListe_ItemGroupByOutputType = {
    id_checkliste_item: number
    nom_item: string
    _count: CheckListe_ItemCountAggregateOutputType | null
    _avg: CheckListe_ItemAvgAggregateOutputType | null
    _sum: CheckListe_ItemSumAggregateOutputType | null
    _min: CheckListe_ItemMinAggregateOutputType | null
    _max: CheckListe_ItemMaxAggregateOutputType | null
  }

  type GetCheckListe_ItemGroupByPayload<T extends CheckListe_ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckListe_ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckListe_ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckListe_ItemGroupByOutputType[P]>
            : GetScalarType<T[P], CheckListe_ItemGroupByOutputType[P]>
        }
      >
    >


  export type CheckListe_ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_checkliste_item?: boolean
    nom_item?: boolean
    destinations?: boolean | CheckListe_Item$destinationsArgs<ExtArgs>
    coche_utilisateurs?: boolean | CheckListe_Item$coche_utilisateursArgs<ExtArgs>
    _count?: boolean | CheckListe_ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkListe_Item"]>

  export type CheckListe_ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_checkliste_item?: boolean
    nom_item?: boolean
  }, ExtArgs["result"]["checkListe_Item"]>

  export type CheckListe_ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_checkliste_item?: boolean
    nom_item?: boolean
  }, ExtArgs["result"]["checkListe_Item"]>

  export type CheckListe_ItemSelectScalar = {
    id_checkliste_item?: boolean
    nom_item?: boolean
  }

  export type CheckListe_ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_checkliste_item" | "nom_item", ExtArgs["result"]["checkListe_Item"]>
  export type CheckListe_ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | CheckListe_Item$destinationsArgs<ExtArgs>
    coche_utilisateurs?: boolean | CheckListe_Item$coche_utilisateursArgs<ExtArgs>
    _count?: boolean | CheckListe_ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CheckListe_ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CheckListe_ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CheckListe_ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckListe_Item"
    objects: {
      destinations: Prisma.$contientPayload<ExtArgs>[]
      coche_utilisateurs: Prisma.$cocherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_checkliste_item: number
      nom_item: string
    }, ExtArgs["result"]["checkListe_Item"]>
    composites: {}
  }

  type CheckListe_ItemGetPayload<S extends boolean | null | undefined | CheckListe_ItemDefaultArgs> = $Result.GetResult<Prisma.$CheckListe_ItemPayload, S>

  type CheckListe_ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckListe_ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckListe_ItemCountAggregateInputType | true
    }

  export interface CheckListe_ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckListe_Item'], meta: { name: 'CheckListe_Item' } }
    /**
     * Find zero or one CheckListe_Item that matches the filter.
     * @param {CheckListe_ItemFindUniqueArgs} args - Arguments to find a CheckListe_Item
     * @example
     * // Get one CheckListe_Item
     * const checkListe_Item = await prisma.checkListe_Item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckListe_ItemFindUniqueArgs>(args: SelectSubset<T, CheckListe_ItemFindUniqueArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckListe_Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckListe_ItemFindUniqueOrThrowArgs} args - Arguments to find a CheckListe_Item
     * @example
     * // Get one CheckListe_Item
     * const checkListe_Item = await prisma.checkListe_Item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckListe_ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckListe_ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckListe_Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListe_ItemFindFirstArgs} args - Arguments to find a CheckListe_Item
     * @example
     * // Get one CheckListe_Item
     * const checkListe_Item = await prisma.checkListe_Item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckListe_ItemFindFirstArgs>(args?: SelectSubset<T, CheckListe_ItemFindFirstArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckListe_Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListe_ItemFindFirstOrThrowArgs} args - Arguments to find a CheckListe_Item
     * @example
     * // Get one CheckListe_Item
     * const checkListe_Item = await prisma.checkListe_Item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckListe_ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckListe_ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckListe_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListe_ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckListe_Items
     * const checkListe_Items = await prisma.checkListe_Item.findMany()
     * 
     * // Get first 10 CheckListe_Items
     * const checkListe_Items = await prisma.checkListe_Item.findMany({ take: 10 })
     * 
     * // Only select the `id_checkliste_item`
     * const checkListe_ItemWithId_checkliste_itemOnly = await prisma.checkListe_Item.findMany({ select: { id_checkliste_item: true } })
     * 
     */
    findMany<T extends CheckListe_ItemFindManyArgs>(args?: SelectSubset<T, CheckListe_ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckListe_Item.
     * @param {CheckListe_ItemCreateArgs} args - Arguments to create a CheckListe_Item.
     * @example
     * // Create one CheckListe_Item
     * const CheckListe_Item = await prisma.checkListe_Item.create({
     *   data: {
     *     // ... data to create a CheckListe_Item
     *   }
     * })
     * 
     */
    create<T extends CheckListe_ItemCreateArgs>(args: SelectSubset<T, CheckListe_ItemCreateArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckListe_Items.
     * @param {CheckListe_ItemCreateManyArgs} args - Arguments to create many CheckListe_Items.
     * @example
     * // Create many CheckListe_Items
     * const checkListe_Item = await prisma.checkListe_Item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckListe_ItemCreateManyArgs>(args?: SelectSubset<T, CheckListe_ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckListe_Items and returns the data saved in the database.
     * @param {CheckListe_ItemCreateManyAndReturnArgs} args - Arguments to create many CheckListe_Items.
     * @example
     * // Create many CheckListe_Items
     * const checkListe_Item = await prisma.checkListe_Item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckListe_Items and only return the `id_checkliste_item`
     * const checkListe_ItemWithId_checkliste_itemOnly = await prisma.checkListe_Item.createManyAndReturn({
     *   select: { id_checkliste_item: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckListe_ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckListe_ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckListe_Item.
     * @param {CheckListe_ItemDeleteArgs} args - Arguments to delete one CheckListe_Item.
     * @example
     * // Delete one CheckListe_Item
     * const CheckListe_Item = await prisma.checkListe_Item.delete({
     *   where: {
     *     // ... filter to delete one CheckListe_Item
     *   }
     * })
     * 
     */
    delete<T extends CheckListe_ItemDeleteArgs>(args: SelectSubset<T, CheckListe_ItemDeleteArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckListe_Item.
     * @param {CheckListe_ItemUpdateArgs} args - Arguments to update one CheckListe_Item.
     * @example
     * // Update one CheckListe_Item
     * const checkListe_Item = await prisma.checkListe_Item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckListe_ItemUpdateArgs>(args: SelectSubset<T, CheckListe_ItemUpdateArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckListe_Items.
     * @param {CheckListe_ItemDeleteManyArgs} args - Arguments to filter CheckListe_Items to delete.
     * @example
     * // Delete a few CheckListe_Items
     * const { count } = await prisma.checkListe_Item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckListe_ItemDeleteManyArgs>(args?: SelectSubset<T, CheckListe_ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckListe_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListe_ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckListe_Items
     * const checkListe_Item = await prisma.checkListe_Item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckListe_ItemUpdateManyArgs>(args: SelectSubset<T, CheckListe_ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckListe_Items and returns the data updated in the database.
     * @param {CheckListe_ItemUpdateManyAndReturnArgs} args - Arguments to update many CheckListe_Items.
     * @example
     * // Update many CheckListe_Items
     * const checkListe_Item = await prisma.checkListe_Item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckListe_Items and only return the `id_checkliste_item`
     * const checkListe_ItemWithId_checkliste_itemOnly = await prisma.checkListe_Item.updateManyAndReturn({
     *   select: { id_checkliste_item: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CheckListe_ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckListe_ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckListe_Item.
     * @param {CheckListe_ItemUpsertArgs} args - Arguments to update or create a CheckListe_Item.
     * @example
     * // Update or create a CheckListe_Item
     * const checkListe_Item = await prisma.checkListe_Item.upsert({
     *   create: {
     *     // ... data to create a CheckListe_Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckListe_Item we want to update
     *   }
     * })
     */
    upsert<T extends CheckListe_ItemUpsertArgs>(args: SelectSubset<T, CheckListe_ItemUpsertArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckListe_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListe_ItemCountArgs} args - Arguments to filter CheckListe_Items to count.
     * @example
     * // Count the number of CheckListe_Items
     * const count = await prisma.checkListe_Item.count({
     *   where: {
     *     // ... the filter for the CheckListe_Items we want to count
     *   }
     * })
    **/
    count<T extends CheckListe_ItemCountArgs>(
      args?: Subset<T, CheckListe_ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckListe_ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckListe_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListe_ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CheckListe_ItemAggregateArgs>(args: Subset<T, CheckListe_ItemAggregateArgs>): Prisma.PrismaPromise<GetCheckListe_ItemAggregateType<T>>

    /**
     * Group by CheckListe_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckListe_ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CheckListe_ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckListe_ItemGroupByArgs['orderBy'] }
        : { orderBy?: CheckListe_ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CheckListe_ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckListe_ItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckListe_Item model
   */
  readonly fields: CheckListe_ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckListe_Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckListe_ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinations<T extends CheckListe_Item$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, CheckListe_Item$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coche_utilisateurs<T extends CheckListe_Item$coche_utilisateursArgs<ExtArgs> = {}>(args?: Subset<T, CheckListe_Item$coche_utilisateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CheckListe_Item model
   */
  interface CheckListe_ItemFieldRefs {
    readonly id_checkliste_item: FieldRef<"CheckListe_Item", 'Int'>
    readonly nom_item: FieldRef<"CheckListe_Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CheckListe_Item findUnique
   */
  export type CheckListe_ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
    /**
     * Filter, which CheckListe_Item to fetch.
     */
    where: CheckListe_ItemWhereUniqueInput
  }

  /**
   * CheckListe_Item findUniqueOrThrow
   */
  export type CheckListe_ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
    /**
     * Filter, which CheckListe_Item to fetch.
     */
    where: CheckListe_ItemWhereUniqueInput
  }

  /**
   * CheckListe_Item findFirst
   */
  export type CheckListe_ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
    /**
     * Filter, which CheckListe_Item to fetch.
     */
    where?: CheckListe_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckListe_Items to fetch.
     */
    orderBy?: CheckListe_ItemOrderByWithRelationInput | CheckListe_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckListe_Items.
     */
    cursor?: CheckListe_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckListe_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckListe_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckListe_Items.
     */
    distinct?: CheckListe_ItemScalarFieldEnum | CheckListe_ItemScalarFieldEnum[]
  }

  /**
   * CheckListe_Item findFirstOrThrow
   */
  export type CheckListe_ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
    /**
     * Filter, which CheckListe_Item to fetch.
     */
    where?: CheckListe_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckListe_Items to fetch.
     */
    orderBy?: CheckListe_ItemOrderByWithRelationInput | CheckListe_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckListe_Items.
     */
    cursor?: CheckListe_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckListe_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckListe_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckListe_Items.
     */
    distinct?: CheckListe_ItemScalarFieldEnum | CheckListe_ItemScalarFieldEnum[]
  }

  /**
   * CheckListe_Item findMany
   */
  export type CheckListe_ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
    /**
     * Filter, which CheckListe_Items to fetch.
     */
    where?: CheckListe_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckListe_Items to fetch.
     */
    orderBy?: CheckListe_ItemOrderByWithRelationInput | CheckListe_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckListe_Items.
     */
    cursor?: CheckListe_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckListe_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckListe_Items.
     */
    skip?: number
    distinct?: CheckListe_ItemScalarFieldEnum | CheckListe_ItemScalarFieldEnum[]
  }

  /**
   * CheckListe_Item create
   */
  export type CheckListe_ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckListe_Item.
     */
    data: XOR<CheckListe_ItemCreateInput, CheckListe_ItemUncheckedCreateInput>
  }

  /**
   * CheckListe_Item createMany
   */
  export type CheckListe_ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckListe_Items.
     */
    data: CheckListe_ItemCreateManyInput | CheckListe_ItemCreateManyInput[]
  }

  /**
   * CheckListe_Item createManyAndReturn
   */
  export type CheckListe_ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * The data used to create many CheckListe_Items.
     */
    data: CheckListe_ItemCreateManyInput | CheckListe_ItemCreateManyInput[]
  }

  /**
   * CheckListe_Item update
   */
  export type CheckListe_ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckListe_Item.
     */
    data: XOR<CheckListe_ItemUpdateInput, CheckListe_ItemUncheckedUpdateInput>
    /**
     * Choose, which CheckListe_Item to update.
     */
    where: CheckListe_ItemWhereUniqueInput
  }

  /**
   * CheckListe_Item updateMany
   */
  export type CheckListe_ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckListe_Items.
     */
    data: XOR<CheckListe_ItemUpdateManyMutationInput, CheckListe_ItemUncheckedUpdateManyInput>
    /**
     * Filter which CheckListe_Items to update
     */
    where?: CheckListe_ItemWhereInput
    /**
     * Limit how many CheckListe_Items to update.
     */
    limit?: number
  }

  /**
   * CheckListe_Item updateManyAndReturn
   */
  export type CheckListe_ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * The data used to update CheckListe_Items.
     */
    data: XOR<CheckListe_ItemUpdateManyMutationInput, CheckListe_ItemUncheckedUpdateManyInput>
    /**
     * Filter which CheckListe_Items to update
     */
    where?: CheckListe_ItemWhereInput
    /**
     * Limit how many CheckListe_Items to update.
     */
    limit?: number
  }

  /**
   * CheckListe_Item upsert
   */
  export type CheckListe_ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckListe_Item to update in case it exists.
     */
    where: CheckListe_ItemWhereUniqueInput
    /**
     * In case the CheckListe_Item found by the `where` argument doesn't exist, create a new CheckListe_Item with this data.
     */
    create: XOR<CheckListe_ItemCreateInput, CheckListe_ItemUncheckedCreateInput>
    /**
     * In case the CheckListe_Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckListe_ItemUpdateInput, CheckListe_ItemUncheckedUpdateInput>
  }

  /**
   * CheckListe_Item delete
   */
  export type CheckListe_ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
    /**
     * Filter which CheckListe_Item to delete.
     */
    where: CheckListe_ItemWhereUniqueInput
  }

  /**
   * CheckListe_Item deleteMany
   */
  export type CheckListe_ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckListe_Items to delete
     */
    where?: CheckListe_ItemWhereInput
    /**
     * Limit how many CheckListe_Items to delete.
     */
    limit?: number
  }

  /**
   * CheckListe_Item.destinations
   */
  export type CheckListe_Item$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    where?: contientWhereInput
    orderBy?: contientOrderByWithRelationInput | contientOrderByWithRelationInput[]
    cursor?: contientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContientScalarFieldEnum | ContientScalarFieldEnum[]
  }

  /**
   * CheckListe_Item.coche_utilisateurs
   */
  export type CheckListe_Item$coche_utilisateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    where?: cocherWhereInput
    orderBy?: cocherOrderByWithRelationInput | cocherOrderByWithRelationInput[]
    cursor?: cocherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CocherScalarFieldEnum | CocherScalarFieldEnum[]
  }

  /**
   * CheckListe_Item without action
   */
  export type CheckListe_ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckListe_Item
     */
    select?: CheckListe_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckListe_Item
     */
    omit?: CheckListe_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckListe_ItemInclude<ExtArgs> | null
  }


  /**
   * Model Formalite_administrative_Item
   */

  export type AggregateFormalite_administrative_Item = {
    _count: Formalite_administrative_ItemCountAggregateOutputType | null
    _avg: Formalite_administrative_ItemAvgAggregateOutputType | null
    _sum: Formalite_administrative_ItemSumAggregateOutputType | null
    _min: Formalite_administrative_ItemMinAggregateOutputType | null
    _max: Formalite_administrative_ItemMaxAggregateOutputType | null
  }

  export type Formalite_administrative_ItemAvgAggregateOutputType = {
    id_formalite_administrative_item: number | null
  }

  export type Formalite_administrative_ItemSumAggregateOutputType = {
    id_formalite_administrative_item: number | null
  }

  export type Formalite_administrative_ItemMinAggregateOutputType = {
    id_formalite_administrative_item: number | null
    descripition_formalite: string | null
  }

  export type Formalite_administrative_ItemMaxAggregateOutputType = {
    id_formalite_administrative_item: number | null
    descripition_formalite: string | null
  }

  export type Formalite_administrative_ItemCountAggregateOutputType = {
    id_formalite_administrative_item: number
    descripition_formalite: number
    _all: number
  }


  export type Formalite_administrative_ItemAvgAggregateInputType = {
    id_formalite_administrative_item?: true
  }

  export type Formalite_administrative_ItemSumAggregateInputType = {
    id_formalite_administrative_item?: true
  }

  export type Formalite_administrative_ItemMinAggregateInputType = {
    id_formalite_administrative_item?: true
    descripition_formalite?: true
  }

  export type Formalite_administrative_ItemMaxAggregateInputType = {
    id_formalite_administrative_item?: true
    descripition_formalite?: true
  }

  export type Formalite_administrative_ItemCountAggregateInputType = {
    id_formalite_administrative_item?: true
    descripition_formalite?: true
    _all?: true
  }

  export type Formalite_administrative_ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formalite_administrative_Item to aggregate.
     */
    where?: Formalite_administrative_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formalite_administrative_Items to fetch.
     */
    orderBy?: Formalite_administrative_ItemOrderByWithRelationInput | Formalite_administrative_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Formalite_administrative_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formalite_administrative_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formalite_administrative_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Formalite_administrative_Items
    **/
    _count?: true | Formalite_administrative_ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Formalite_administrative_ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Formalite_administrative_ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Formalite_administrative_ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Formalite_administrative_ItemMaxAggregateInputType
  }

  export type GetFormalite_administrative_ItemAggregateType<T extends Formalite_administrative_ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFormalite_administrative_Item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormalite_administrative_Item[P]>
      : GetScalarType<T[P], AggregateFormalite_administrative_Item[P]>
  }




  export type Formalite_administrative_ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Formalite_administrative_ItemWhereInput
    orderBy?: Formalite_administrative_ItemOrderByWithAggregationInput | Formalite_administrative_ItemOrderByWithAggregationInput[]
    by: Formalite_administrative_ItemScalarFieldEnum[] | Formalite_administrative_ItemScalarFieldEnum
    having?: Formalite_administrative_ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Formalite_administrative_ItemCountAggregateInputType | true
    _avg?: Formalite_administrative_ItemAvgAggregateInputType
    _sum?: Formalite_administrative_ItemSumAggregateInputType
    _min?: Formalite_administrative_ItemMinAggregateInputType
    _max?: Formalite_administrative_ItemMaxAggregateInputType
  }

  export type Formalite_administrative_ItemGroupByOutputType = {
    id_formalite_administrative_item: number
    descripition_formalite: string
    _count: Formalite_administrative_ItemCountAggregateOutputType | null
    _avg: Formalite_administrative_ItemAvgAggregateOutputType | null
    _sum: Formalite_administrative_ItemSumAggregateOutputType | null
    _min: Formalite_administrative_ItemMinAggregateOutputType | null
    _max: Formalite_administrative_ItemMaxAggregateOutputType | null
  }

  type GetFormalite_administrative_ItemGroupByPayload<T extends Formalite_administrative_ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Formalite_administrative_ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Formalite_administrative_ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Formalite_administrative_ItemGroupByOutputType[P]>
            : GetScalarType<T[P], Formalite_administrative_ItemGroupByOutputType[P]>
        }
      >
    >


  export type Formalite_administrative_ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_formalite_administrative_item?: boolean
    descripition_formalite?: boolean
    destinations?: boolean | Formalite_administrative_Item$destinationsArgs<ExtArgs>
    _count?: boolean | Formalite_administrative_ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formalite_administrative_Item"]>

  export type Formalite_administrative_ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_formalite_administrative_item?: boolean
    descripition_formalite?: boolean
  }, ExtArgs["result"]["formalite_administrative_Item"]>

  export type Formalite_administrative_ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_formalite_administrative_item?: boolean
    descripition_formalite?: boolean
  }, ExtArgs["result"]["formalite_administrative_Item"]>

  export type Formalite_administrative_ItemSelectScalar = {
    id_formalite_administrative_item?: boolean
    descripition_formalite?: boolean
  }

  export type Formalite_administrative_ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_formalite_administrative_item" | "descripition_formalite", ExtArgs["result"]["formalite_administrative_Item"]>
  export type Formalite_administrative_ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinations?: boolean | Formalite_administrative_Item$destinationsArgs<ExtArgs>
    _count?: boolean | Formalite_administrative_ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Formalite_administrative_ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Formalite_administrative_ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Formalite_administrative_ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Formalite_administrative_Item"
    objects: {
      destinations: Prisma.$requiertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_formalite_administrative_item: number
      descripition_formalite: string
    }, ExtArgs["result"]["formalite_administrative_Item"]>
    composites: {}
  }

  type Formalite_administrative_ItemGetPayload<S extends boolean | null | undefined | Formalite_administrative_ItemDefaultArgs> = $Result.GetResult<Prisma.$Formalite_administrative_ItemPayload, S>

  type Formalite_administrative_ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Formalite_administrative_ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Formalite_administrative_ItemCountAggregateInputType | true
    }

  export interface Formalite_administrative_ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Formalite_administrative_Item'], meta: { name: 'Formalite_administrative_Item' } }
    /**
     * Find zero or one Formalite_administrative_Item that matches the filter.
     * @param {Formalite_administrative_ItemFindUniqueArgs} args - Arguments to find a Formalite_administrative_Item
     * @example
     * // Get one Formalite_administrative_Item
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Formalite_administrative_ItemFindUniqueArgs>(args: SelectSubset<T, Formalite_administrative_ItemFindUniqueArgs<ExtArgs>>): Prisma__Formalite_administrative_ItemClient<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Formalite_administrative_Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Formalite_administrative_ItemFindUniqueOrThrowArgs} args - Arguments to find a Formalite_administrative_Item
     * @example
     * // Get one Formalite_administrative_Item
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Formalite_administrative_ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, Formalite_administrative_ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Formalite_administrative_ItemClient<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formalite_administrative_Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formalite_administrative_ItemFindFirstArgs} args - Arguments to find a Formalite_administrative_Item
     * @example
     * // Get one Formalite_administrative_Item
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Formalite_administrative_ItemFindFirstArgs>(args?: SelectSubset<T, Formalite_administrative_ItemFindFirstArgs<ExtArgs>>): Prisma__Formalite_administrative_ItemClient<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Formalite_administrative_Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formalite_administrative_ItemFindFirstOrThrowArgs} args - Arguments to find a Formalite_administrative_Item
     * @example
     * // Get one Formalite_administrative_Item
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Formalite_administrative_ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, Formalite_administrative_ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__Formalite_administrative_ItemClient<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Formalite_administrative_Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formalite_administrative_ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formalite_administrative_Items
     * const formalite_administrative_Items = await prisma.formalite_administrative_Item.findMany()
     * 
     * // Get first 10 Formalite_administrative_Items
     * const formalite_administrative_Items = await prisma.formalite_administrative_Item.findMany({ take: 10 })
     * 
     * // Only select the `id_formalite_administrative_item`
     * const formalite_administrative_ItemWithId_formalite_administrative_itemOnly = await prisma.formalite_administrative_Item.findMany({ select: { id_formalite_administrative_item: true } })
     * 
     */
    findMany<T extends Formalite_administrative_ItemFindManyArgs>(args?: SelectSubset<T, Formalite_administrative_ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Formalite_administrative_Item.
     * @param {Formalite_administrative_ItemCreateArgs} args - Arguments to create a Formalite_administrative_Item.
     * @example
     * // Create one Formalite_administrative_Item
     * const Formalite_administrative_Item = await prisma.formalite_administrative_Item.create({
     *   data: {
     *     // ... data to create a Formalite_administrative_Item
     *   }
     * })
     * 
     */
    create<T extends Formalite_administrative_ItemCreateArgs>(args: SelectSubset<T, Formalite_administrative_ItemCreateArgs<ExtArgs>>): Prisma__Formalite_administrative_ItemClient<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Formalite_administrative_Items.
     * @param {Formalite_administrative_ItemCreateManyArgs} args - Arguments to create many Formalite_administrative_Items.
     * @example
     * // Create many Formalite_administrative_Items
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Formalite_administrative_ItemCreateManyArgs>(args?: SelectSubset<T, Formalite_administrative_ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Formalite_administrative_Items and returns the data saved in the database.
     * @param {Formalite_administrative_ItemCreateManyAndReturnArgs} args - Arguments to create many Formalite_administrative_Items.
     * @example
     * // Create many Formalite_administrative_Items
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Formalite_administrative_Items and only return the `id_formalite_administrative_item`
     * const formalite_administrative_ItemWithId_formalite_administrative_itemOnly = await prisma.formalite_administrative_Item.createManyAndReturn({
     *   select: { id_formalite_administrative_item: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Formalite_administrative_ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, Formalite_administrative_ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Formalite_administrative_Item.
     * @param {Formalite_administrative_ItemDeleteArgs} args - Arguments to delete one Formalite_administrative_Item.
     * @example
     * // Delete one Formalite_administrative_Item
     * const Formalite_administrative_Item = await prisma.formalite_administrative_Item.delete({
     *   where: {
     *     // ... filter to delete one Formalite_administrative_Item
     *   }
     * })
     * 
     */
    delete<T extends Formalite_administrative_ItemDeleteArgs>(args: SelectSubset<T, Formalite_administrative_ItemDeleteArgs<ExtArgs>>): Prisma__Formalite_administrative_ItemClient<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Formalite_administrative_Item.
     * @param {Formalite_administrative_ItemUpdateArgs} args - Arguments to update one Formalite_administrative_Item.
     * @example
     * // Update one Formalite_administrative_Item
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Formalite_administrative_ItemUpdateArgs>(args: SelectSubset<T, Formalite_administrative_ItemUpdateArgs<ExtArgs>>): Prisma__Formalite_administrative_ItemClient<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Formalite_administrative_Items.
     * @param {Formalite_administrative_ItemDeleteManyArgs} args - Arguments to filter Formalite_administrative_Items to delete.
     * @example
     * // Delete a few Formalite_administrative_Items
     * const { count } = await prisma.formalite_administrative_Item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Formalite_administrative_ItemDeleteManyArgs>(args?: SelectSubset<T, Formalite_administrative_ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formalite_administrative_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formalite_administrative_ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formalite_administrative_Items
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Formalite_administrative_ItemUpdateManyArgs>(args: SelectSubset<T, Formalite_administrative_ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formalite_administrative_Items and returns the data updated in the database.
     * @param {Formalite_administrative_ItemUpdateManyAndReturnArgs} args - Arguments to update many Formalite_administrative_Items.
     * @example
     * // Update many Formalite_administrative_Items
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Formalite_administrative_Items and only return the `id_formalite_administrative_item`
     * const formalite_administrative_ItemWithId_formalite_administrative_itemOnly = await prisma.formalite_administrative_Item.updateManyAndReturn({
     *   select: { id_formalite_administrative_item: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Formalite_administrative_ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, Formalite_administrative_ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Formalite_administrative_Item.
     * @param {Formalite_administrative_ItemUpsertArgs} args - Arguments to update or create a Formalite_administrative_Item.
     * @example
     * // Update or create a Formalite_administrative_Item
     * const formalite_administrative_Item = await prisma.formalite_administrative_Item.upsert({
     *   create: {
     *     // ... data to create a Formalite_administrative_Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formalite_administrative_Item we want to update
     *   }
     * })
     */
    upsert<T extends Formalite_administrative_ItemUpsertArgs>(args: SelectSubset<T, Formalite_administrative_ItemUpsertArgs<ExtArgs>>): Prisma__Formalite_administrative_ItemClient<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Formalite_administrative_Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formalite_administrative_ItemCountArgs} args - Arguments to filter Formalite_administrative_Items to count.
     * @example
     * // Count the number of Formalite_administrative_Items
     * const count = await prisma.formalite_administrative_Item.count({
     *   where: {
     *     // ... the filter for the Formalite_administrative_Items we want to count
     *   }
     * })
    **/
    count<T extends Formalite_administrative_ItemCountArgs>(
      args?: Subset<T, Formalite_administrative_ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Formalite_administrative_ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formalite_administrative_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formalite_administrative_ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Formalite_administrative_ItemAggregateArgs>(args: Subset<T, Formalite_administrative_ItemAggregateArgs>): Prisma.PrismaPromise<GetFormalite_administrative_ItemAggregateType<T>>

    /**
     * Group by Formalite_administrative_Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Formalite_administrative_ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Formalite_administrative_ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Formalite_administrative_ItemGroupByArgs['orderBy'] }
        : { orderBy?: Formalite_administrative_ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Formalite_administrative_ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormalite_administrative_ItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Formalite_administrative_Item model
   */
  readonly fields: Formalite_administrative_ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Formalite_administrative_Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Formalite_administrative_ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinations<T extends Formalite_administrative_Item$destinationsArgs<ExtArgs> = {}>(args?: Subset<T, Formalite_administrative_Item$destinationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Formalite_administrative_Item model
   */
  interface Formalite_administrative_ItemFieldRefs {
    readonly id_formalite_administrative_item: FieldRef<"Formalite_administrative_Item", 'Int'>
    readonly descripition_formalite: FieldRef<"Formalite_administrative_Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Formalite_administrative_Item findUnique
   */
  export type Formalite_administrative_ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Formalite_administrative_Item to fetch.
     */
    where: Formalite_administrative_ItemWhereUniqueInput
  }

  /**
   * Formalite_administrative_Item findUniqueOrThrow
   */
  export type Formalite_administrative_ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Formalite_administrative_Item to fetch.
     */
    where: Formalite_administrative_ItemWhereUniqueInput
  }

  /**
   * Formalite_administrative_Item findFirst
   */
  export type Formalite_administrative_ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Formalite_administrative_Item to fetch.
     */
    where?: Formalite_administrative_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formalite_administrative_Items to fetch.
     */
    orderBy?: Formalite_administrative_ItemOrderByWithRelationInput | Formalite_administrative_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formalite_administrative_Items.
     */
    cursor?: Formalite_administrative_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formalite_administrative_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formalite_administrative_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formalite_administrative_Items.
     */
    distinct?: Formalite_administrative_ItemScalarFieldEnum | Formalite_administrative_ItemScalarFieldEnum[]
  }

  /**
   * Formalite_administrative_Item findFirstOrThrow
   */
  export type Formalite_administrative_ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Formalite_administrative_Item to fetch.
     */
    where?: Formalite_administrative_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formalite_administrative_Items to fetch.
     */
    orderBy?: Formalite_administrative_ItemOrderByWithRelationInput | Formalite_administrative_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formalite_administrative_Items.
     */
    cursor?: Formalite_administrative_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formalite_administrative_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formalite_administrative_Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formalite_administrative_Items.
     */
    distinct?: Formalite_administrative_ItemScalarFieldEnum | Formalite_administrative_ItemScalarFieldEnum[]
  }

  /**
   * Formalite_administrative_Item findMany
   */
  export type Formalite_administrative_ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
    /**
     * Filter, which Formalite_administrative_Items to fetch.
     */
    where?: Formalite_administrative_ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formalite_administrative_Items to fetch.
     */
    orderBy?: Formalite_administrative_ItemOrderByWithRelationInput | Formalite_administrative_ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Formalite_administrative_Items.
     */
    cursor?: Formalite_administrative_ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formalite_administrative_Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formalite_administrative_Items.
     */
    skip?: number
    distinct?: Formalite_administrative_ItemScalarFieldEnum | Formalite_administrative_ItemScalarFieldEnum[]
  }

  /**
   * Formalite_administrative_Item create
   */
  export type Formalite_administrative_ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Formalite_administrative_Item.
     */
    data: XOR<Formalite_administrative_ItemCreateInput, Formalite_administrative_ItemUncheckedCreateInput>
  }

  /**
   * Formalite_administrative_Item createMany
   */
  export type Formalite_administrative_ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Formalite_administrative_Items.
     */
    data: Formalite_administrative_ItemCreateManyInput | Formalite_administrative_ItemCreateManyInput[]
  }

  /**
   * Formalite_administrative_Item createManyAndReturn
   */
  export type Formalite_administrative_ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Formalite_administrative_Items.
     */
    data: Formalite_administrative_ItemCreateManyInput | Formalite_administrative_ItemCreateManyInput[]
  }

  /**
   * Formalite_administrative_Item update
   */
  export type Formalite_administrative_ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Formalite_administrative_Item.
     */
    data: XOR<Formalite_administrative_ItemUpdateInput, Formalite_administrative_ItemUncheckedUpdateInput>
    /**
     * Choose, which Formalite_administrative_Item to update.
     */
    where: Formalite_administrative_ItemWhereUniqueInput
  }

  /**
   * Formalite_administrative_Item updateMany
   */
  export type Formalite_administrative_ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Formalite_administrative_Items.
     */
    data: XOR<Formalite_administrative_ItemUpdateManyMutationInput, Formalite_administrative_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Formalite_administrative_Items to update
     */
    where?: Formalite_administrative_ItemWhereInput
    /**
     * Limit how many Formalite_administrative_Items to update.
     */
    limit?: number
  }

  /**
   * Formalite_administrative_Item updateManyAndReturn
   */
  export type Formalite_administrative_ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * The data used to update Formalite_administrative_Items.
     */
    data: XOR<Formalite_administrative_ItemUpdateManyMutationInput, Formalite_administrative_ItemUncheckedUpdateManyInput>
    /**
     * Filter which Formalite_administrative_Items to update
     */
    where?: Formalite_administrative_ItemWhereInput
    /**
     * Limit how many Formalite_administrative_Items to update.
     */
    limit?: number
  }

  /**
   * Formalite_administrative_Item upsert
   */
  export type Formalite_administrative_ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Formalite_administrative_Item to update in case it exists.
     */
    where: Formalite_administrative_ItemWhereUniqueInput
    /**
     * In case the Formalite_administrative_Item found by the `where` argument doesn't exist, create a new Formalite_administrative_Item with this data.
     */
    create: XOR<Formalite_administrative_ItemCreateInput, Formalite_administrative_ItemUncheckedCreateInput>
    /**
     * In case the Formalite_administrative_Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Formalite_administrative_ItemUpdateInput, Formalite_administrative_ItemUncheckedUpdateInput>
  }

  /**
   * Formalite_administrative_Item delete
   */
  export type Formalite_administrative_ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
    /**
     * Filter which Formalite_administrative_Item to delete.
     */
    where: Formalite_administrative_ItemWhereUniqueInput
  }

  /**
   * Formalite_administrative_Item deleteMany
   */
  export type Formalite_administrative_ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Formalite_administrative_Items to delete
     */
    where?: Formalite_administrative_ItemWhereInput
    /**
     * Limit how many Formalite_administrative_Items to delete.
     */
    limit?: number
  }

  /**
   * Formalite_administrative_Item.destinations
   */
  export type Formalite_administrative_Item$destinationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    where?: requiertWhereInput
    orderBy?: requiertOrderByWithRelationInput | requiertOrderByWithRelationInput[]
    cursor?: requiertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequiertScalarFieldEnum | RequiertScalarFieldEnum[]
  }

  /**
   * Formalite_administrative_Item without action
   */
  export type Formalite_administrative_ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Formalite_administrative_Item
     */
    select?: Formalite_administrative_ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Formalite_administrative_Item
     */
    omit?: Formalite_administrative_ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Formalite_administrative_ItemInclude<ExtArgs> | null
  }


  /**
   * Model fait_par
   */

  export type AggregateFait_par = {
    _count: Fait_parCountAggregateOutputType | null
    _avg: Fait_parAvgAggregateOutputType | null
    _sum: Fait_parSumAggregateOutputType | null
    _min: Fait_parMinAggregateOutputType | null
    _max: Fait_parMaxAggregateOutputType | null
  }

  export type Fait_parAvgAggregateOutputType = {
    utilisateurId: number | null
    destinationId: number | null
  }

  export type Fait_parSumAggregateOutputType = {
    utilisateurId: number | null
    destinationId: number | null
  }

  export type Fait_parMinAggregateOutputType = {
    utilisateurId: number | null
    destinationId: number | null
  }

  export type Fait_parMaxAggregateOutputType = {
    utilisateurId: number | null
    destinationId: number | null
  }

  export type Fait_parCountAggregateOutputType = {
    utilisateurId: number
    destinationId: number
    _all: number
  }


  export type Fait_parAvgAggregateInputType = {
    utilisateurId?: true
    destinationId?: true
  }

  export type Fait_parSumAggregateInputType = {
    utilisateurId?: true
    destinationId?: true
  }

  export type Fait_parMinAggregateInputType = {
    utilisateurId?: true
    destinationId?: true
  }

  export type Fait_parMaxAggregateInputType = {
    utilisateurId?: true
    destinationId?: true
  }

  export type Fait_parCountAggregateInputType = {
    utilisateurId?: true
    destinationId?: true
    _all?: true
  }

  export type Fait_parAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fait_par to aggregate.
     */
    where?: fait_parWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fait_pars to fetch.
     */
    orderBy?: fait_parOrderByWithRelationInput | fait_parOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fait_parWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fait_pars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fait_pars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fait_pars
    **/
    _count?: true | Fait_parCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fait_parAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fait_parSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fait_parMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fait_parMaxAggregateInputType
  }

  export type GetFait_parAggregateType<T extends Fait_parAggregateArgs> = {
        [P in keyof T & keyof AggregateFait_par]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFait_par[P]>
      : GetScalarType<T[P], AggregateFait_par[P]>
  }




  export type fait_parGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fait_parWhereInput
    orderBy?: fait_parOrderByWithAggregationInput | fait_parOrderByWithAggregationInput[]
    by: Fait_parScalarFieldEnum[] | Fait_parScalarFieldEnum
    having?: fait_parScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fait_parCountAggregateInputType | true
    _avg?: Fait_parAvgAggregateInputType
    _sum?: Fait_parSumAggregateInputType
    _min?: Fait_parMinAggregateInputType
    _max?: Fait_parMaxAggregateInputType
  }

  export type Fait_parGroupByOutputType = {
    utilisateurId: number
    destinationId: number
    _count: Fait_parCountAggregateOutputType | null
    _avg: Fait_parAvgAggregateOutputType | null
    _sum: Fait_parSumAggregateOutputType | null
    _min: Fait_parMinAggregateOutputType | null
    _max: Fait_parMaxAggregateOutputType | null
  }

  type GetFait_parGroupByPayload<T extends fait_parGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fait_parGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fait_parGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fait_parGroupByOutputType[P]>
            : GetScalarType<T[P], Fait_parGroupByOutputType[P]>
        }
      >
    >


  export type fait_parSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    destinationId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fait_par"]>

  export type fait_parSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    destinationId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fait_par"]>

  export type fait_parSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    destinationId?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fait_par"]>

  export type fait_parSelectScalar = {
    utilisateurId?: boolean
    destinationId?: boolean
  }

  export type fait_parOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utilisateurId" | "destinationId", ExtArgs["result"]["fait_par"]>
  export type fait_parInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type fait_parIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }
  export type fait_parIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $fait_parPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fait_par"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      utilisateurId: number
      destinationId: number
    }, ExtArgs["result"]["fait_par"]>
    composites: {}
  }

  type fait_parGetPayload<S extends boolean | null | undefined | fait_parDefaultArgs> = $Result.GetResult<Prisma.$fait_parPayload, S>

  type fait_parCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fait_parFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Fait_parCountAggregateInputType | true
    }

  export interface fait_parDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fait_par'], meta: { name: 'fait_par' } }
    /**
     * Find zero or one Fait_par that matches the filter.
     * @param {fait_parFindUniqueArgs} args - Arguments to find a Fait_par
     * @example
     * // Get one Fait_par
     * const fait_par = await prisma.fait_par.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fait_parFindUniqueArgs>(args: SelectSubset<T, fait_parFindUniqueArgs<ExtArgs>>): Prisma__fait_parClient<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fait_par that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fait_parFindUniqueOrThrowArgs} args - Arguments to find a Fait_par
     * @example
     * // Get one Fait_par
     * const fait_par = await prisma.fait_par.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fait_parFindUniqueOrThrowArgs>(args: SelectSubset<T, fait_parFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fait_parClient<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fait_par that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fait_parFindFirstArgs} args - Arguments to find a Fait_par
     * @example
     * // Get one Fait_par
     * const fait_par = await prisma.fait_par.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fait_parFindFirstArgs>(args?: SelectSubset<T, fait_parFindFirstArgs<ExtArgs>>): Prisma__fait_parClient<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fait_par that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fait_parFindFirstOrThrowArgs} args - Arguments to find a Fait_par
     * @example
     * // Get one Fait_par
     * const fait_par = await prisma.fait_par.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fait_parFindFirstOrThrowArgs>(args?: SelectSubset<T, fait_parFindFirstOrThrowArgs<ExtArgs>>): Prisma__fait_parClient<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fait_pars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fait_parFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fait_pars
     * const fait_pars = await prisma.fait_par.findMany()
     * 
     * // Get first 10 Fait_pars
     * const fait_pars = await prisma.fait_par.findMany({ take: 10 })
     * 
     * // Only select the `utilisateurId`
     * const fait_parWithUtilisateurIdOnly = await prisma.fait_par.findMany({ select: { utilisateurId: true } })
     * 
     */
    findMany<T extends fait_parFindManyArgs>(args?: SelectSubset<T, fait_parFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fait_par.
     * @param {fait_parCreateArgs} args - Arguments to create a Fait_par.
     * @example
     * // Create one Fait_par
     * const Fait_par = await prisma.fait_par.create({
     *   data: {
     *     // ... data to create a Fait_par
     *   }
     * })
     * 
     */
    create<T extends fait_parCreateArgs>(args: SelectSubset<T, fait_parCreateArgs<ExtArgs>>): Prisma__fait_parClient<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fait_pars.
     * @param {fait_parCreateManyArgs} args - Arguments to create many Fait_pars.
     * @example
     * // Create many Fait_pars
     * const fait_par = await prisma.fait_par.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fait_parCreateManyArgs>(args?: SelectSubset<T, fait_parCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fait_pars and returns the data saved in the database.
     * @param {fait_parCreateManyAndReturnArgs} args - Arguments to create many Fait_pars.
     * @example
     * // Create many Fait_pars
     * const fait_par = await prisma.fait_par.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fait_pars and only return the `utilisateurId`
     * const fait_parWithUtilisateurIdOnly = await prisma.fait_par.createManyAndReturn({
     *   select: { utilisateurId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends fait_parCreateManyAndReturnArgs>(args?: SelectSubset<T, fait_parCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fait_par.
     * @param {fait_parDeleteArgs} args - Arguments to delete one Fait_par.
     * @example
     * // Delete one Fait_par
     * const Fait_par = await prisma.fait_par.delete({
     *   where: {
     *     // ... filter to delete one Fait_par
     *   }
     * })
     * 
     */
    delete<T extends fait_parDeleteArgs>(args: SelectSubset<T, fait_parDeleteArgs<ExtArgs>>): Prisma__fait_parClient<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fait_par.
     * @param {fait_parUpdateArgs} args - Arguments to update one Fait_par.
     * @example
     * // Update one Fait_par
     * const fait_par = await prisma.fait_par.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fait_parUpdateArgs>(args: SelectSubset<T, fait_parUpdateArgs<ExtArgs>>): Prisma__fait_parClient<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fait_pars.
     * @param {fait_parDeleteManyArgs} args - Arguments to filter Fait_pars to delete.
     * @example
     * // Delete a few Fait_pars
     * const { count } = await prisma.fait_par.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fait_parDeleteManyArgs>(args?: SelectSubset<T, fait_parDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fait_pars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fait_parUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fait_pars
     * const fait_par = await prisma.fait_par.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fait_parUpdateManyArgs>(args: SelectSubset<T, fait_parUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fait_pars and returns the data updated in the database.
     * @param {fait_parUpdateManyAndReturnArgs} args - Arguments to update many Fait_pars.
     * @example
     * // Update many Fait_pars
     * const fait_par = await prisma.fait_par.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fait_pars and only return the `utilisateurId`
     * const fait_parWithUtilisateurIdOnly = await prisma.fait_par.updateManyAndReturn({
     *   select: { utilisateurId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends fait_parUpdateManyAndReturnArgs>(args: SelectSubset<T, fait_parUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fait_par.
     * @param {fait_parUpsertArgs} args - Arguments to update or create a Fait_par.
     * @example
     * // Update or create a Fait_par
     * const fait_par = await prisma.fait_par.upsert({
     *   create: {
     *     // ... data to create a Fait_par
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fait_par we want to update
     *   }
     * })
     */
    upsert<T extends fait_parUpsertArgs>(args: SelectSubset<T, fait_parUpsertArgs<ExtArgs>>): Prisma__fait_parClient<$Result.GetResult<Prisma.$fait_parPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fait_pars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fait_parCountArgs} args - Arguments to filter Fait_pars to count.
     * @example
     * // Count the number of Fait_pars
     * const count = await prisma.fait_par.count({
     *   where: {
     *     // ... the filter for the Fait_pars we want to count
     *   }
     * })
    **/
    count<T extends fait_parCountArgs>(
      args?: Subset<T, fait_parCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fait_parCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fait_par.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fait_parAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fait_parAggregateArgs>(args: Subset<T, Fait_parAggregateArgs>): Prisma.PrismaPromise<GetFait_parAggregateType<T>>

    /**
     * Group by Fait_par.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fait_parGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fait_parGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fait_parGroupByArgs['orderBy'] }
        : { orderBy?: fait_parGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fait_parGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFait_parGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fait_par model
   */
  readonly fields: fait_parFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fait_par.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fait_parClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fait_par model
   */
  interface fait_parFieldRefs {
    readonly utilisateurId: FieldRef<"fait_par", 'Int'>
    readonly destinationId: FieldRef<"fait_par", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * fait_par findUnique
   */
  export type fait_parFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    /**
     * Filter, which fait_par to fetch.
     */
    where: fait_parWhereUniqueInput
  }

  /**
   * fait_par findUniqueOrThrow
   */
  export type fait_parFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    /**
     * Filter, which fait_par to fetch.
     */
    where: fait_parWhereUniqueInput
  }

  /**
   * fait_par findFirst
   */
  export type fait_parFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    /**
     * Filter, which fait_par to fetch.
     */
    where?: fait_parWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fait_pars to fetch.
     */
    orderBy?: fait_parOrderByWithRelationInput | fait_parOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fait_pars.
     */
    cursor?: fait_parWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fait_pars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fait_pars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fait_pars.
     */
    distinct?: Fait_parScalarFieldEnum | Fait_parScalarFieldEnum[]
  }

  /**
   * fait_par findFirstOrThrow
   */
  export type fait_parFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    /**
     * Filter, which fait_par to fetch.
     */
    where?: fait_parWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fait_pars to fetch.
     */
    orderBy?: fait_parOrderByWithRelationInput | fait_parOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fait_pars.
     */
    cursor?: fait_parWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fait_pars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fait_pars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fait_pars.
     */
    distinct?: Fait_parScalarFieldEnum | Fait_parScalarFieldEnum[]
  }

  /**
   * fait_par findMany
   */
  export type fait_parFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    /**
     * Filter, which fait_pars to fetch.
     */
    where?: fait_parWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fait_pars to fetch.
     */
    orderBy?: fait_parOrderByWithRelationInput | fait_parOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fait_pars.
     */
    cursor?: fait_parWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fait_pars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fait_pars.
     */
    skip?: number
    distinct?: Fait_parScalarFieldEnum | Fait_parScalarFieldEnum[]
  }

  /**
   * fait_par create
   */
  export type fait_parCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    /**
     * The data needed to create a fait_par.
     */
    data: XOR<fait_parCreateInput, fait_parUncheckedCreateInput>
  }

  /**
   * fait_par createMany
   */
  export type fait_parCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fait_pars.
     */
    data: fait_parCreateManyInput | fait_parCreateManyInput[]
  }

  /**
   * fait_par createManyAndReturn
   */
  export type fait_parCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * The data used to create many fait_pars.
     */
    data: fait_parCreateManyInput | fait_parCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * fait_par update
   */
  export type fait_parUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    /**
     * The data needed to update a fait_par.
     */
    data: XOR<fait_parUpdateInput, fait_parUncheckedUpdateInput>
    /**
     * Choose, which fait_par to update.
     */
    where: fait_parWhereUniqueInput
  }

  /**
   * fait_par updateMany
   */
  export type fait_parUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fait_pars.
     */
    data: XOR<fait_parUpdateManyMutationInput, fait_parUncheckedUpdateManyInput>
    /**
     * Filter which fait_pars to update
     */
    where?: fait_parWhereInput
    /**
     * Limit how many fait_pars to update.
     */
    limit?: number
  }

  /**
   * fait_par updateManyAndReturn
   */
  export type fait_parUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * The data used to update fait_pars.
     */
    data: XOR<fait_parUpdateManyMutationInput, fait_parUncheckedUpdateManyInput>
    /**
     * Filter which fait_pars to update
     */
    where?: fait_parWhereInput
    /**
     * Limit how many fait_pars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * fait_par upsert
   */
  export type fait_parUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    /**
     * The filter to search for the fait_par to update in case it exists.
     */
    where: fait_parWhereUniqueInput
    /**
     * In case the fait_par found by the `where` argument doesn't exist, create a new fait_par with this data.
     */
    create: XOR<fait_parCreateInput, fait_parUncheckedCreateInput>
    /**
     * In case the fait_par was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fait_parUpdateInput, fait_parUncheckedUpdateInput>
  }

  /**
   * fait_par delete
   */
  export type fait_parDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
    /**
     * Filter which fait_par to delete.
     */
    where: fait_parWhereUniqueInput
  }

  /**
   * fait_par deleteMany
   */
  export type fait_parDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fait_pars to delete
     */
    where?: fait_parWhereInput
    /**
     * Limit how many fait_pars to delete.
     */
    limit?: number
  }

  /**
   * fait_par without action
   */
  export type fait_parDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fait_par
     */
    select?: fait_parSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fait_par
     */
    omit?: fait_parOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fait_parInclude<ExtArgs> | null
  }


  /**
   * Model contient
   */

  export type AggregateContient = {
    _count: ContientCountAggregateOutputType | null
    _avg: ContientAvgAggregateOutputType | null
    _sum: ContientSumAggregateOutputType | null
    _min: ContientMinAggregateOutputType | null
    _max: ContientMaxAggregateOutputType | null
  }

  export type ContientAvgAggregateOutputType = {
    destinationId: number | null
    checklistItemId: number | null
  }

  export type ContientSumAggregateOutputType = {
    destinationId: number | null
    checklistItemId: number | null
  }

  export type ContientMinAggregateOutputType = {
    destinationId: number | null
    checklistItemId: number | null
  }

  export type ContientMaxAggregateOutputType = {
    destinationId: number | null
    checklistItemId: number | null
  }

  export type ContientCountAggregateOutputType = {
    destinationId: number
    checklistItemId: number
    _all: number
  }


  export type ContientAvgAggregateInputType = {
    destinationId?: true
    checklistItemId?: true
  }

  export type ContientSumAggregateInputType = {
    destinationId?: true
    checklistItemId?: true
  }

  export type ContientMinAggregateInputType = {
    destinationId?: true
    checklistItemId?: true
  }

  export type ContientMaxAggregateInputType = {
    destinationId?: true
    checklistItemId?: true
  }

  export type ContientCountAggregateInputType = {
    destinationId?: true
    checklistItemId?: true
    _all?: true
  }

  export type ContientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contient to aggregate.
     */
    where?: contientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contients to fetch.
     */
    orderBy?: contientOrderByWithRelationInput | contientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contients
    **/
    _count?: true | ContientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContientMaxAggregateInputType
  }

  export type GetContientAggregateType<T extends ContientAggregateArgs> = {
        [P in keyof T & keyof AggregateContient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContient[P]>
      : GetScalarType<T[P], AggregateContient[P]>
  }




  export type contientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contientWhereInput
    orderBy?: contientOrderByWithAggregationInput | contientOrderByWithAggregationInput[]
    by: ContientScalarFieldEnum[] | ContientScalarFieldEnum
    having?: contientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContientCountAggregateInputType | true
    _avg?: ContientAvgAggregateInputType
    _sum?: ContientSumAggregateInputType
    _min?: ContientMinAggregateInputType
    _max?: ContientMaxAggregateInputType
  }

  export type ContientGroupByOutputType = {
    destinationId: number
    checklistItemId: number
    _count: ContientCountAggregateOutputType | null
    _avg: ContientAvgAggregateOutputType | null
    _sum: ContientSumAggregateOutputType | null
    _min: ContientMinAggregateOutputType | null
    _max: ContientMaxAggregateOutputType | null
  }

  type GetContientGroupByPayload<T extends contientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContientGroupByOutputType[P]>
            : GetScalarType<T[P], ContientGroupByOutputType[P]>
        }
      >
    >


  export type contientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destinationId?: boolean
    checklistItemId?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contient"]>

  export type contientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destinationId?: boolean
    checklistItemId?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contient"]>

  export type contientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destinationId?: boolean
    checklistItemId?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contient"]>

  export type contientSelectScalar = {
    destinationId?: boolean
    checklistItemId?: boolean
  }

  export type contientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"destinationId" | "checklistItemId", ExtArgs["result"]["contient"]>
  export type contientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }
  export type contientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }
  export type contientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }

  export type $contientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contient"
    objects: {
      destination: Prisma.$DestinationPayload<ExtArgs>
      checklist_item: Prisma.$CheckListe_ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      destinationId: number
      checklistItemId: number
    }, ExtArgs["result"]["contient"]>
    composites: {}
  }

  type contientGetPayload<S extends boolean | null | undefined | contientDefaultArgs> = $Result.GetResult<Prisma.$contientPayload, S>

  type contientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContientCountAggregateInputType | true
    }

  export interface contientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contient'], meta: { name: 'contient' } }
    /**
     * Find zero or one Contient that matches the filter.
     * @param {contientFindUniqueArgs} args - Arguments to find a Contient
     * @example
     * // Get one Contient
     * const contient = await prisma.contient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contientFindUniqueArgs>(args: SelectSubset<T, contientFindUniqueArgs<ExtArgs>>): Prisma__contientClient<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contientFindUniqueOrThrowArgs} args - Arguments to find a Contient
     * @example
     * // Get one Contient
     * const contient = await prisma.contient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contientFindUniqueOrThrowArgs>(args: SelectSubset<T, contientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contientClient<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contientFindFirstArgs} args - Arguments to find a Contient
     * @example
     * // Get one Contient
     * const contient = await prisma.contient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contientFindFirstArgs>(args?: SelectSubset<T, contientFindFirstArgs<ExtArgs>>): Prisma__contientClient<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contientFindFirstOrThrowArgs} args - Arguments to find a Contient
     * @example
     * // Get one Contient
     * const contient = await prisma.contient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contientFindFirstOrThrowArgs>(args?: SelectSubset<T, contientFindFirstOrThrowArgs<ExtArgs>>): Prisma__contientClient<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contients
     * const contients = await prisma.contient.findMany()
     * 
     * // Get first 10 Contients
     * const contients = await prisma.contient.findMany({ take: 10 })
     * 
     * // Only select the `destinationId`
     * const contientWithDestinationIdOnly = await prisma.contient.findMany({ select: { destinationId: true } })
     * 
     */
    findMany<T extends contientFindManyArgs>(args?: SelectSubset<T, contientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contient.
     * @param {contientCreateArgs} args - Arguments to create a Contient.
     * @example
     * // Create one Contient
     * const Contient = await prisma.contient.create({
     *   data: {
     *     // ... data to create a Contient
     *   }
     * })
     * 
     */
    create<T extends contientCreateArgs>(args: SelectSubset<T, contientCreateArgs<ExtArgs>>): Prisma__contientClient<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contients.
     * @param {contientCreateManyArgs} args - Arguments to create many Contients.
     * @example
     * // Create many Contients
     * const contient = await prisma.contient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contientCreateManyArgs>(args?: SelectSubset<T, contientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contients and returns the data saved in the database.
     * @param {contientCreateManyAndReturnArgs} args - Arguments to create many Contients.
     * @example
     * // Create many Contients
     * const contient = await prisma.contient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contients and only return the `destinationId`
     * const contientWithDestinationIdOnly = await prisma.contient.createManyAndReturn({
     *   select: { destinationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends contientCreateManyAndReturnArgs>(args?: SelectSubset<T, contientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contient.
     * @param {contientDeleteArgs} args - Arguments to delete one Contient.
     * @example
     * // Delete one Contient
     * const Contient = await prisma.contient.delete({
     *   where: {
     *     // ... filter to delete one Contient
     *   }
     * })
     * 
     */
    delete<T extends contientDeleteArgs>(args: SelectSubset<T, contientDeleteArgs<ExtArgs>>): Prisma__contientClient<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contient.
     * @param {contientUpdateArgs} args - Arguments to update one Contient.
     * @example
     * // Update one Contient
     * const contient = await prisma.contient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contientUpdateArgs>(args: SelectSubset<T, contientUpdateArgs<ExtArgs>>): Prisma__contientClient<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contients.
     * @param {contientDeleteManyArgs} args - Arguments to filter Contients to delete.
     * @example
     * // Delete a few Contients
     * const { count } = await prisma.contient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contientDeleteManyArgs>(args?: SelectSubset<T, contientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contients
     * const contient = await prisma.contient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contientUpdateManyArgs>(args: SelectSubset<T, contientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contients and returns the data updated in the database.
     * @param {contientUpdateManyAndReturnArgs} args - Arguments to update many Contients.
     * @example
     * // Update many Contients
     * const contient = await prisma.contient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contients and only return the `destinationId`
     * const contientWithDestinationIdOnly = await prisma.contient.updateManyAndReturn({
     *   select: { destinationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends contientUpdateManyAndReturnArgs>(args: SelectSubset<T, contientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contient.
     * @param {contientUpsertArgs} args - Arguments to update or create a Contient.
     * @example
     * // Update or create a Contient
     * const contient = await prisma.contient.upsert({
     *   create: {
     *     // ... data to create a Contient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contient we want to update
     *   }
     * })
     */
    upsert<T extends contientUpsertArgs>(args: SelectSubset<T, contientUpsertArgs<ExtArgs>>): Prisma__contientClient<$Result.GetResult<Prisma.$contientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contientCountArgs} args - Arguments to filter Contients to count.
     * @example
     * // Count the number of Contients
     * const count = await prisma.contient.count({
     *   where: {
     *     // ... the filter for the Contients we want to count
     *   }
     * })
    **/
    count<T extends contientCountArgs>(
      args?: Subset<T, contientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContientAggregateArgs>(args: Subset<T, ContientAggregateArgs>): Prisma.PrismaPromise<GetContientAggregateType<T>>

    /**
     * Group by Contient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contientGroupByArgs['orderBy'] }
        : { orderBy?: contientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contient model
   */
  readonly fields: contientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checklist_item<T extends CheckListe_ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CheckListe_ItemDefaultArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the contient model
   */
  interface contientFieldRefs {
    readonly destinationId: FieldRef<"contient", 'Int'>
    readonly checklistItemId: FieldRef<"contient", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * contient findUnique
   */
  export type contientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    /**
     * Filter, which contient to fetch.
     */
    where: contientWhereUniqueInput
  }

  /**
   * contient findUniqueOrThrow
   */
  export type contientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    /**
     * Filter, which contient to fetch.
     */
    where: contientWhereUniqueInput
  }

  /**
   * contient findFirst
   */
  export type contientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    /**
     * Filter, which contient to fetch.
     */
    where?: contientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contients to fetch.
     */
    orderBy?: contientOrderByWithRelationInput | contientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contients.
     */
    cursor?: contientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contients.
     */
    distinct?: ContientScalarFieldEnum | ContientScalarFieldEnum[]
  }

  /**
   * contient findFirstOrThrow
   */
  export type contientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    /**
     * Filter, which contient to fetch.
     */
    where?: contientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contients to fetch.
     */
    orderBy?: contientOrderByWithRelationInput | contientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contients.
     */
    cursor?: contientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contients.
     */
    distinct?: ContientScalarFieldEnum | ContientScalarFieldEnum[]
  }

  /**
   * contient findMany
   */
  export type contientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    /**
     * Filter, which contients to fetch.
     */
    where?: contientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contients to fetch.
     */
    orderBy?: contientOrderByWithRelationInput | contientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contients.
     */
    cursor?: contientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contients.
     */
    skip?: number
    distinct?: ContientScalarFieldEnum | ContientScalarFieldEnum[]
  }

  /**
   * contient create
   */
  export type contientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    /**
     * The data needed to create a contient.
     */
    data: XOR<contientCreateInput, contientUncheckedCreateInput>
  }

  /**
   * contient createMany
   */
  export type contientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contients.
     */
    data: contientCreateManyInput | contientCreateManyInput[]
  }

  /**
   * contient createManyAndReturn
   */
  export type contientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * The data used to create many contients.
     */
    data: contientCreateManyInput | contientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * contient update
   */
  export type contientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    /**
     * The data needed to update a contient.
     */
    data: XOR<contientUpdateInput, contientUncheckedUpdateInput>
    /**
     * Choose, which contient to update.
     */
    where: contientWhereUniqueInput
  }

  /**
   * contient updateMany
   */
  export type contientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contients.
     */
    data: XOR<contientUpdateManyMutationInput, contientUncheckedUpdateManyInput>
    /**
     * Filter which contients to update
     */
    where?: contientWhereInput
    /**
     * Limit how many contients to update.
     */
    limit?: number
  }

  /**
   * contient updateManyAndReturn
   */
  export type contientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * The data used to update contients.
     */
    data: XOR<contientUpdateManyMutationInput, contientUncheckedUpdateManyInput>
    /**
     * Filter which contients to update
     */
    where?: contientWhereInput
    /**
     * Limit how many contients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * contient upsert
   */
  export type contientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    /**
     * The filter to search for the contient to update in case it exists.
     */
    where: contientWhereUniqueInput
    /**
     * In case the contient found by the `where` argument doesn't exist, create a new contient with this data.
     */
    create: XOR<contientCreateInput, contientUncheckedCreateInput>
    /**
     * In case the contient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contientUpdateInput, contientUncheckedUpdateInput>
  }

  /**
   * contient delete
   */
  export type contientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
    /**
     * Filter which contient to delete.
     */
    where: contientWhereUniqueInput
  }

  /**
   * contient deleteMany
   */
  export type contientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contients to delete
     */
    where?: contientWhereInput
    /**
     * Limit how many contients to delete.
     */
    limit?: number
  }

  /**
   * contient without action
   */
  export type contientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contient
     */
    select?: contientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contient
     */
    omit?: contientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contientInclude<ExtArgs> | null
  }


  /**
   * Model requiert
   */

  export type AggregateRequiert = {
    _count: RequiertCountAggregateOutputType | null
    _avg: RequiertAvgAggregateOutputType | null
    _sum: RequiertSumAggregateOutputType | null
    _min: RequiertMinAggregateOutputType | null
    _max: RequiertMaxAggregateOutputType | null
  }

  export type RequiertAvgAggregateOutputType = {
    destinationId: number | null
    formaliteItemId: number | null
  }

  export type RequiertSumAggregateOutputType = {
    destinationId: number | null
    formaliteItemId: number | null
  }

  export type RequiertMinAggregateOutputType = {
    destinationId: number | null
    formaliteItemId: number | null
  }

  export type RequiertMaxAggregateOutputType = {
    destinationId: number | null
    formaliteItemId: number | null
  }

  export type RequiertCountAggregateOutputType = {
    destinationId: number
    formaliteItemId: number
    _all: number
  }


  export type RequiertAvgAggregateInputType = {
    destinationId?: true
    formaliteItemId?: true
  }

  export type RequiertSumAggregateInputType = {
    destinationId?: true
    formaliteItemId?: true
  }

  export type RequiertMinAggregateInputType = {
    destinationId?: true
    formaliteItemId?: true
  }

  export type RequiertMaxAggregateInputType = {
    destinationId?: true
    formaliteItemId?: true
  }

  export type RequiertCountAggregateInputType = {
    destinationId?: true
    formaliteItemId?: true
    _all?: true
  }

  export type RequiertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which requiert to aggregate.
     */
    where?: requiertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requierts to fetch.
     */
    orderBy?: requiertOrderByWithRelationInput | requiertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: requiertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requierts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requierts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned requierts
    **/
    _count?: true | RequiertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RequiertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RequiertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequiertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequiertMaxAggregateInputType
  }

  export type GetRequiertAggregateType<T extends RequiertAggregateArgs> = {
        [P in keyof T & keyof AggregateRequiert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequiert[P]>
      : GetScalarType<T[P], AggregateRequiert[P]>
  }




  export type requiertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: requiertWhereInput
    orderBy?: requiertOrderByWithAggregationInput | requiertOrderByWithAggregationInput[]
    by: RequiertScalarFieldEnum[] | RequiertScalarFieldEnum
    having?: requiertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequiertCountAggregateInputType | true
    _avg?: RequiertAvgAggregateInputType
    _sum?: RequiertSumAggregateInputType
    _min?: RequiertMinAggregateInputType
    _max?: RequiertMaxAggregateInputType
  }

  export type RequiertGroupByOutputType = {
    destinationId: number
    formaliteItemId: number
    _count: RequiertCountAggregateOutputType | null
    _avg: RequiertAvgAggregateOutputType | null
    _sum: RequiertSumAggregateOutputType | null
    _min: RequiertMinAggregateOutputType | null
    _max: RequiertMaxAggregateOutputType | null
  }

  type GetRequiertGroupByPayload<T extends requiertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequiertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequiertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequiertGroupByOutputType[P]>
            : GetScalarType<T[P], RequiertGroupByOutputType[P]>
        }
      >
    >


  export type requiertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destinationId?: boolean
    formaliteItemId?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    formalite?: boolean | Formalite_administrative_ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requiert"]>

  export type requiertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destinationId?: boolean
    formaliteItemId?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    formalite?: boolean | Formalite_administrative_ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requiert"]>

  export type requiertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    destinationId?: boolean
    formaliteItemId?: boolean
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    formalite?: boolean | Formalite_administrative_ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["requiert"]>

  export type requiertSelectScalar = {
    destinationId?: boolean
    formaliteItemId?: boolean
  }

  export type requiertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"destinationId" | "formaliteItemId", ExtArgs["result"]["requiert"]>
  export type requiertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    formalite?: boolean | Formalite_administrative_ItemDefaultArgs<ExtArgs>
  }
  export type requiertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    formalite?: boolean | Formalite_administrative_ItemDefaultArgs<ExtArgs>
  }
  export type requiertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    formalite?: boolean | Formalite_administrative_ItemDefaultArgs<ExtArgs>
  }

  export type $requiertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "requiert"
    objects: {
      destination: Prisma.$DestinationPayload<ExtArgs>
      formalite: Prisma.$Formalite_administrative_ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      destinationId: number
      formaliteItemId: number
    }, ExtArgs["result"]["requiert"]>
    composites: {}
  }

  type requiertGetPayload<S extends boolean | null | undefined | requiertDefaultArgs> = $Result.GetResult<Prisma.$requiertPayload, S>

  type requiertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<requiertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequiertCountAggregateInputType | true
    }

  export interface requiertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['requiert'], meta: { name: 'requiert' } }
    /**
     * Find zero or one Requiert that matches the filter.
     * @param {requiertFindUniqueArgs} args - Arguments to find a Requiert
     * @example
     * // Get one Requiert
     * const requiert = await prisma.requiert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends requiertFindUniqueArgs>(args: SelectSubset<T, requiertFindUniqueArgs<ExtArgs>>): Prisma__requiertClient<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Requiert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {requiertFindUniqueOrThrowArgs} args - Arguments to find a Requiert
     * @example
     * // Get one Requiert
     * const requiert = await prisma.requiert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends requiertFindUniqueOrThrowArgs>(args: SelectSubset<T, requiertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__requiertClient<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requiert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requiertFindFirstArgs} args - Arguments to find a Requiert
     * @example
     * // Get one Requiert
     * const requiert = await prisma.requiert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends requiertFindFirstArgs>(args?: SelectSubset<T, requiertFindFirstArgs<ExtArgs>>): Prisma__requiertClient<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Requiert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requiertFindFirstOrThrowArgs} args - Arguments to find a Requiert
     * @example
     * // Get one Requiert
     * const requiert = await prisma.requiert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends requiertFindFirstOrThrowArgs>(args?: SelectSubset<T, requiertFindFirstOrThrowArgs<ExtArgs>>): Prisma__requiertClient<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requierts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requiertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requierts
     * const requierts = await prisma.requiert.findMany()
     * 
     * // Get first 10 Requierts
     * const requierts = await prisma.requiert.findMany({ take: 10 })
     * 
     * // Only select the `destinationId`
     * const requiertWithDestinationIdOnly = await prisma.requiert.findMany({ select: { destinationId: true } })
     * 
     */
    findMany<T extends requiertFindManyArgs>(args?: SelectSubset<T, requiertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Requiert.
     * @param {requiertCreateArgs} args - Arguments to create a Requiert.
     * @example
     * // Create one Requiert
     * const Requiert = await prisma.requiert.create({
     *   data: {
     *     // ... data to create a Requiert
     *   }
     * })
     * 
     */
    create<T extends requiertCreateArgs>(args: SelectSubset<T, requiertCreateArgs<ExtArgs>>): Prisma__requiertClient<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requierts.
     * @param {requiertCreateManyArgs} args - Arguments to create many Requierts.
     * @example
     * // Create many Requierts
     * const requiert = await prisma.requiert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends requiertCreateManyArgs>(args?: SelectSubset<T, requiertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requierts and returns the data saved in the database.
     * @param {requiertCreateManyAndReturnArgs} args - Arguments to create many Requierts.
     * @example
     * // Create many Requierts
     * const requiert = await prisma.requiert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requierts and only return the `destinationId`
     * const requiertWithDestinationIdOnly = await prisma.requiert.createManyAndReturn({
     *   select: { destinationId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends requiertCreateManyAndReturnArgs>(args?: SelectSubset<T, requiertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Requiert.
     * @param {requiertDeleteArgs} args - Arguments to delete one Requiert.
     * @example
     * // Delete one Requiert
     * const Requiert = await prisma.requiert.delete({
     *   where: {
     *     // ... filter to delete one Requiert
     *   }
     * })
     * 
     */
    delete<T extends requiertDeleteArgs>(args: SelectSubset<T, requiertDeleteArgs<ExtArgs>>): Prisma__requiertClient<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Requiert.
     * @param {requiertUpdateArgs} args - Arguments to update one Requiert.
     * @example
     * // Update one Requiert
     * const requiert = await prisma.requiert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends requiertUpdateArgs>(args: SelectSubset<T, requiertUpdateArgs<ExtArgs>>): Prisma__requiertClient<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requierts.
     * @param {requiertDeleteManyArgs} args - Arguments to filter Requierts to delete.
     * @example
     * // Delete a few Requierts
     * const { count } = await prisma.requiert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends requiertDeleteManyArgs>(args?: SelectSubset<T, requiertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requierts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requiertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requierts
     * const requiert = await prisma.requiert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends requiertUpdateManyArgs>(args: SelectSubset<T, requiertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requierts and returns the data updated in the database.
     * @param {requiertUpdateManyAndReturnArgs} args - Arguments to update many Requierts.
     * @example
     * // Update many Requierts
     * const requiert = await prisma.requiert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requierts and only return the `destinationId`
     * const requiertWithDestinationIdOnly = await prisma.requiert.updateManyAndReturn({
     *   select: { destinationId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends requiertUpdateManyAndReturnArgs>(args: SelectSubset<T, requiertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Requiert.
     * @param {requiertUpsertArgs} args - Arguments to update or create a Requiert.
     * @example
     * // Update or create a Requiert
     * const requiert = await prisma.requiert.upsert({
     *   create: {
     *     // ... data to create a Requiert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Requiert we want to update
     *   }
     * })
     */
    upsert<T extends requiertUpsertArgs>(args: SelectSubset<T, requiertUpsertArgs<ExtArgs>>): Prisma__requiertClient<$Result.GetResult<Prisma.$requiertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requierts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requiertCountArgs} args - Arguments to filter Requierts to count.
     * @example
     * // Count the number of Requierts
     * const count = await prisma.requiert.count({
     *   where: {
     *     // ... the filter for the Requierts we want to count
     *   }
     * })
    **/
    count<T extends requiertCountArgs>(
      args?: Subset<T, requiertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequiertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Requiert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequiertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequiertAggregateArgs>(args: Subset<T, RequiertAggregateArgs>): Prisma.PrismaPromise<GetRequiertAggregateType<T>>

    /**
     * Group by Requiert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {requiertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends requiertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: requiertGroupByArgs['orderBy'] }
        : { orderBy?: requiertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, requiertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequiertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the requiert model
   */
  readonly fields: requiertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for requiert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__requiertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formalite<T extends Formalite_administrative_ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Formalite_administrative_ItemDefaultArgs<ExtArgs>>): Prisma__Formalite_administrative_ItemClient<$Result.GetResult<Prisma.$Formalite_administrative_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the requiert model
   */
  interface requiertFieldRefs {
    readonly destinationId: FieldRef<"requiert", 'Int'>
    readonly formaliteItemId: FieldRef<"requiert", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * requiert findUnique
   */
  export type requiertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    /**
     * Filter, which requiert to fetch.
     */
    where: requiertWhereUniqueInput
  }

  /**
   * requiert findUniqueOrThrow
   */
  export type requiertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    /**
     * Filter, which requiert to fetch.
     */
    where: requiertWhereUniqueInput
  }

  /**
   * requiert findFirst
   */
  export type requiertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    /**
     * Filter, which requiert to fetch.
     */
    where?: requiertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requierts to fetch.
     */
    orderBy?: requiertOrderByWithRelationInput | requiertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for requierts.
     */
    cursor?: requiertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requierts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requierts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of requierts.
     */
    distinct?: RequiertScalarFieldEnum | RequiertScalarFieldEnum[]
  }

  /**
   * requiert findFirstOrThrow
   */
  export type requiertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    /**
     * Filter, which requiert to fetch.
     */
    where?: requiertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requierts to fetch.
     */
    orderBy?: requiertOrderByWithRelationInput | requiertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for requierts.
     */
    cursor?: requiertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requierts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requierts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of requierts.
     */
    distinct?: RequiertScalarFieldEnum | RequiertScalarFieldEnum[]
  }

  /**
   * requiert findMany
   */
  export type requiertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    /**
     * Filter, which requierts to fetch.
     */
    where?: requiertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of requierts to fetch.
     */
    orderBy?: requiertOrderByWithRelationInput | requiertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing requierts.
     */
    cursor?: requiertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` requierts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` requierts.
     */
    skip?: number
    distinct?: RequiertScalarFieldEnum | RequiertScalarFieldEnum[]
  }

  /**
   * requiert create
   */
  export type requiertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    /**
     * The data needed to create a requiert.
     */
    data: XOR<requiertCreateInput, requiertUncheckedCreateInput>
  }

  /**
   * requiert createMany
   */
  export type requiertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many requierts.
     */
    data: requiertCreateManyInput | requiertCreateManyInput[]
  }

  /**
   * requiert createManyAndReturn
   */
  export type requiertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * The data used to create many requierts.
     */
    data: requiertCreateManyInput | requiertCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * requiert update
   */
  export type requiertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    /**
     * The data needed to update a requiert.
     */
    data: XOR<requiertUpdateInput, requiertUncheckedUpdateInput>
    /**
     * Choose, which requiert to update.
     */
    where: requiertWhereUniqueInput
  }

  /**
   * requiert updateMany
   */
  export type requiertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update requierts.
     */
    data: XOR<requiertUpdateManyMutationInput, requiertUncheckedUpdateManyInput>
    /**
     * Filter which requierts to update
     */
    where?: requiertWhereInput
    /**
     * Limit how many requierts to update.
     */
    limit?: number
  }

  /**
   * requiert updateManyAndReturn
   */
  export type requiertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * The data used to update requierts.
     */
    data: XOR<requiertUpdateManyMutationInput, requiertUncheckedUpdateManyInput>
    /**
     * Filter which requierts to update
     */
    where?: requiertWhereInput
    /**
     * Limit how many requierts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * requiert upsert
   */
  export type requiertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    /**
     * The filter to search for the requiert to update in case it exists.
     */
    where: requiertWhereUniqueInput
    /**
     * In case the requiert found by the `where` argument doesn't exist, create a new requiert with this data.
     */
    create: XOR<requiertCreateInput, requiertUncheckedCreateInput>
    /**
     * In case the requiert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<requiertUpdateInput, requiertUncheckedUpdateInput>
  }

  /**
   * requiert delete
   */
  export type requiertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
    /**
     * Filter which requiert to delete.
     */
    where: requiertWhereUniqueInput
  }

  /**
   * requiert deleteMany
   */
  export type requiertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which requierts to delete
     */
    where?: requiertWhereInput
    /**
     * Limit how many requierts to delete.
     */
    limit?: number
  }

  /**
   * requiert without action
   */
  export type requiertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the requiert
     */
    select?: requiertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the requiert
     */
    omit?: requiertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: requiertInclude<ExtArgs> | null
  }


  /**
   * Model cocher
   */

  export type AggregateCocher = {
    _count: CocherCountAggregateOutputType | null
    _avg: CocherAvgAggregateOutputType | null
    _sum: CocherSumAggregateOutputType | null
    _min: CocherMinAggregateOutputType | null
    _max: CocherMaxAggregateOutputType | null
  }

  export type CocherAvgAggregateOutputType = {
    utilisateurId: number | null
    checklistItemId: number | null
  }

  export type CocherSumAggregateOutputType = {
    utilisateurId: number | null
    checklistItemId: number | null
  }

  export type CocherMinAggregateOutputType = {
    utilisateurId: number | null
    checklistItemId: number | null
    date_cocher: Date | null
  }

  export type CocherMaxAggregateOutputType = {
    utilisateurId: number | null
    checklistItemId: number | null
    date_cocher: Date | null
  }

  export type CocherCountAggregateOutputType = {
    utilisateurId: number
    checklistItemId: number
    date_cocher: number
    _all: number
  }


  export type CocherAvgAggregateInputType = {
    utilisateurId?: true
    checklistItemId?: true
  }

  export type CocherSumAggregateInputType = {
    utilisateurId?: true
    checklistItemId?: true
  }

  export type CocherMinAggregateInputType = {
    utilisateurId?: true
    checklistItemId?: true
    date_cocher?: true
  }

  export type CocherMaxAggregateInputType = {
    utilisateurId?: true
    checklistItemId?: true
    date_cocher?: true
  }

  export type CocherCountAggregateInputType = {
    utilisateurId?: true
    checklistItemId?: true
    date_cocher?: true
    _all?: true
  }

  export type CocherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cocher to aggregate.
     */
    where?: cocherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cochers to fetch.
     */
    orderBy?: cocherOrderByWithRelationInput | cocherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cocherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cochers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cochers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cochers
    **/
    _count?: true | CocherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CocherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CocherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CocherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CocherMaxAggregateInputType
  }

  export type GetCocherAggregateType<T extends CocherAggregateArgs> = {
        [P in keyof T & keyof AggregateCocher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCocher[P]>
      : GetScalarType<T[P], AggregateCocher[P]>
  }




  export type cocherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cocherWhereInput
    orderBy?: cocherOrderByWithAggregationInput | cocherOrderByWithAggregationInput[]
    by: CocherScalarFieldEnum[] | CocherScalarFieldEnum
    having?: cocherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CocherCountAggregateInputType | true
    _avg?: CocherAvgAggregateInputType
    _sum?: CocherSumAggregateInputType
    _min?: CocherMinAggregateInputType
    _max?: CocherMaxAggregateInputType
  }

  export type CocherGroupByOutputType = {
    utilisateurId: number
    checklistItemId: number
    date_cocher: Date
    _count: CocherCountAggregateOutputType | null
    _avg: CocherAvgAggregateOutputType | null
    _sum: CocherSumAggregateOutputType | null
    _min: CocherMinAggregateOutputType | null
    _max: CocherMaxAggregateOutputType | null
  }

  type GetCocherGroupByPayload<T extends cocherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CocherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CocherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CocherGroupByOutputType[P]>
            : GetScalarType<T[P], CocherGroupByOutputType[P]>
        }
      >
    >


  export type cocherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    checklistItemId?: boolean
    date_cocher?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cocher"]>

  export type cocherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    checklistItemId?: boolean
    date_cocher?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cocher"]>

  export type cocherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    utilisateurId?: boolean
    checklistItemId?: boolean
    date_cocher?: boolean
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cocher"]>

  export type cocherSelectScalar = {
    utilisateurId?: boolean
    checklistItemId?: boolean
    date_cocher?: boolean
  }

  export type cocherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"utilisateurId" | "checklistItemId" | "date_cocher", ExtArgs["result"]["cocher"]>
  export type cocherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }
  export type cocherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }
  export type cocherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    checklist_item?: boolean | CheckListe_ItemDefaultArgs<ExtArgs>
  }

  export type $cocherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cocher"
    objects: {
      utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      checklist_item: Prisma.$CheckListe_ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      utilisateurId: number
      checklistItemId: number
      date_cocher: Date
    }, ExtArgs["result"]["cocher"]>
    composites: {}
  }

  type cocherGetPayload<S extends boolean | null | undefined | cocherDefaultArgs> = $Result.GetResult<Prisma.$cocherPayload, S>

  type cocherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cocherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CocherCountAggregateInputType | true
    }

  export interface cocherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cocher'], meta: { name: 'cocher' } }
    /**
     * Find zero or one Cocher that matches the filter.
     * @param {cocherFindUniqueArgs} args - Arguments to find a Cocher
     * @example
     * // Get one Cocher
     * const cocher = await prisma.cocher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cocherFindUniqueArgs>(args: SelectSubset<T, cocherFindUniqueArgs<ExtArgs>>): Prisma__cocherClient<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cocher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cocherFindUniqueOrThrowArgs} args - Arguments to find a Cocher
     * @example
     * // Get one Cocher
     * const cocher = await prisma.cocher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cocherFindUniqueOrThrowArgs>(args: SelectSubset<T, cocherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cocherClient<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cocher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cocherFindFirstArgs} args - Arguments to find a Cocher
     * @example
     * // Get one Cocher
     * const cocher = await prisma.cocher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cocherFindFirstArgs>(args?: SelectSubset<T, cocherFindFirstArgs<ExtArgs>>): Prisma__cocherClient<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cocher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cocherFindFirstOrThrowArgs} args - Arguments to find a Cocher
     * @example
     * // Get one Cocher
     * const cocher = await prisma.cocher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cocherFindFirstOrThrowArgs>(args?: SelectSubset<T, cocherFindFirstOrThrowArgs<ExtArgs>>): Prisma__cocherClient<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cochers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cocherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cochers
     * const cochers = await prisma.cocher.findMany()
     * 
     * // Get first 10 Cochers
     * const cochers = await prisma.cocher.findMany({ take: 10 })
     * 
     * // Only select the `utilisateurId`
     * const cocherWithUtilisateurIdOnly = await prisma.cocher.findMany({ select: { utilisateurId: true } })
     * 
     */
    findMany<T extends cocherFindManyArgs>(args?: SelectSubset<T, cocherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cocher.
     * @param {cocherCreateArgs} args - Arguments to create a Cocher.
     * @example
     * // Create one Cocher
     * const Cocher = await prisma.cocher.create({
     *   data: {
     *     // ... data to create a Cocher
     *   }
     * })
     * 
     */
    create<T extends cocherCreateArgs>(args: SelectSubset<T, cocherCreateArgs<ExtArgs>>): Prisma__cocherClient<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cochers.
     * @param {cocherCreateManyArgs} args - Arguments to create many Cochers.
     * @example
     * // Create many Cochers
     * const cocher = await prisma.cocher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cocherCreateManyArgs>(args?: SelectSubset<T, cocherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cochers and returns the data saved in the database.
     * @param {cocherCreateManyAndReturnArgs} args - Arguments to create many Cochers.
     * @example
     * // Create many Cochers
     * const cocher = await prisma.cocher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cochers and only return the `utilisateurId`
     * const cocherWithUtilisateurIdOnly = await prisma.cocher.createManyAndReturn({
     *   select: { utilisateurId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cocherCreateManyAndReturnArgs>(args?: SelectSubset<T, cocherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cocher.
     * @param {cocherDeleteArgs} args - Arguments to delete one Cocher.
     * @example
     * // Delete one Cocher
     * const Cocher = await prisma.cocher.delete({
     *   where: {
     *     // ... filter to delete one Cocher
     *   }
     * })
     * 
     */
    delete<T extends cocherDeleteArgs>(args: SelectSubset<T, cocherDeleteArgs<ExtArgs>>): Prisma__cocherClient<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cocher.
     * @param {cocherUpdateArgs} args - Arguments to update one Cocher.
     * @example
     * // Update one Cocher
     * const cocher = await prisma.cocher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cocherUpdateArgs>(args: SelectSubset<T, cocherUpdateArgs<ExtArgs>>): Prisma__cocherClient<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cochers.
     * @param {cocherDeleteManyArgs} args - Arguments to filter Cochers to delete.
     * @example
     * // Delete a few Cochers
     * const { count } = await prisma.cocher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cocherDeleteManyArgs>(args?: SelectSubset<T, cocherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cochers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cocherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cochers
     * const cocher = await prisma.cocher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cocherUpdateManyArgs>(args: SelectSubset<T, cocherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cochers and returns the data updated in the database.
     * @param {cocherUpdateManyAndReturnArgs} args - Arguments to update many Cochers.
     * @example
     * // Update many Cochers
     * const cocher = await prisma.cocher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cochers and only return the `utilisateurId`
     * const cocherWithUtilisateurIdOnly = await prisma.cocher.updateManyAndReturn({
     *   select: { utilisateurId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cocherUpdateManyAndReturnArgs>(args: SelectSubset<T, cocherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cocher.
     * @param {cocherUpsertArgs} args - Arguments to update or create a Cocher.
     * @example
     * // Update or create a Cocher
     * const cocher = await prisma.cocher.upsert({
     *   create: {
     *     // ... data to create a Cocher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cocher we want to update
     *   }
     * })
     */
    upsert<T extends cocherUpsertArgs>(args: SelectSubset<T, cocherUpsertArgs<ExtArgs>>): Prisma__cocherClient<$Result.GetResult<Prisma.$cocherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cochers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cocherCountArgs} args - Arguments to filter Cochers to count.
     * @example
     * // Count the number of Cochers
     * const count = await prisma.cocher.count({
     *   where: {
     *     // ... the filter for the Cochers we want to count
     *   }
     * })
    **/
    count<T extends cocherCountArgs>(
      args?: Subset<T, cocherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CocherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cocher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CocherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CocherAggregateArgs>(args: Subset<T, CocherAggregateArgs>): Prisma.PrismaPromise<GetCocherAggregateType<T>>

    /**
     * Group by Cocher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cocherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cocherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cocherGroupByArgs['orderBy'] }
        : { orderBy?: cocherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cocherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCocherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cocher model
   */
  readonly fields: cocherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cocher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cocherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checklist_item<T extends CheckListe_ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CheckListe_ItemDefaultArgs<ExtArgs>>): Prisma__CheckListe_ItemClient<$Result.GetResult<Prisma.$CheckListe_ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cocher model
   */
  interface cocherFieldRefs {
    readonly utilisateurId: FieldRef<"cocher", 'Int'>
    readonly checklistItemId: FieldRef<"cocher", 'Int'>
    readonly date_cocher: FieldRef<"cocher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cocher findUnique
   */
  export type cocherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    /**
     * Filter, which cocher to fetch.
     */
    where: cocherWhereUniqueInput
  }

  /**
   * cocher findUniqueOrThrow
   */
  export type cocherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    /**
     * Filter, which cocher to fetch.
     */
    where: cocherWhereUniqueInput
  }

  /**
   * cocher findFirst
   */
  export type cocherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    /**
     * Filter, which cocher to fetch.
     */
    where?: cocherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cochers to fetch.
     */
    orderBy?: cocherOrderByWithRelationInput | cocherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cochers.
     */
    cursor?: cocherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cochers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cochers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cochers.
     */
    distinct?: CocherScalarFieldEnum | CocherScalarFieldEnum[]
  }

  /**
   * cocher findFirstOrThrow
   */
  export type cocherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    /**
     * Filter, which cocher to fetch.
     */
    where?: cocherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cochers to fetch.
     */
    orderBy?: cocherOrderByWithRelationInput | cocherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cochers.
     */
    cursor?: cocherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cochers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cochers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cochers.
     */
    distinct?: CocherScalarFieldEnum | CocherScalarFieldEnum[]
  }

  /**
   * cocher findMany
   */
  export type cocherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    /**
     * Filter, which cochers to fetch.
     */
    where?: cocherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cochers to fetch.
     */
    orderBy?: cocherOrderByWithRelationInput | cocherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cochers.
     */
    cursor?: cocherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cochers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cochers.
     */
    skip?: number
    distinct?: CocherScalarFieldEnum | CocherScalarFieldEnum[]
  }

  /**
   * cocher create
   */
  export type cocherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    /**
     * The data needed to create a cocher.
     */
    data: XOR<cocherCreateInput, cocherUncheckedCreateInput>
  }

  /**
   * cocher createMany
   */
  export type cocherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cochers.
     */
    data: cocherCreateManyInput | cocherCreateManyInput[]
  }

  /**
   * cocher createManyAndReturn
   */
  export type cocherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * The data used to create many cochers.
     */
    data: cocherCreateManyInput | cocherCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cocher update
   */
  export type cocherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    /**
     * The data needed to update a cocher.
     */
    data: XOR<cocherUpdateInput, cocherUncheckedUpdateInput>
    /**
     * Choose, which cocher to update.
     */
    where: cocherWhereUniqueInput
  }

  /**
   * cocher updateMany
   */
  export type cocherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cochers.
     */
    data: XOR<cocherUpdateManyMutationInput, cocherUncheckedUpdateManyInput>
    /**
     * Filter which cochers to update
     */
    where?: cocherWhereInput
    /**
     * Limit how many cochers to update.
     */
    limit?: number
  }

  /**
   * cocher updateManyAndReturn
   */
  export type cocherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * The data used to update cochers.
     */
    data: XOR<cocherUpdateManyMutationInput, cocherUncheckedUpdateManyInput>
    /**
     * Filter which cochers to update
     */
    where?: cocherWhereInput
    /**
     * Limit how many cochers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cocher upsert
   */
  export type cocherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    /**
     * The filter to search for the cocher to update in case it exists.
     */
    where: cocherWhereUniqueInput
    /**
     * In case the cocher found by the `where` argument doesn't exist, create a new cocher with this data.
     */
    create: XOR<cocherCreateInput, cocherUncheckedCreateInput>
    /**
     * In case the cocher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cocherUpdateInput, cocherUncheckedUpdateInput>
  }

  /**
   * cocher delete
   */
  export type cocherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
    /**
     * Filter which cocher to delete.
     */
    where: cocherWhereUniqueInput
  }

  /**
   * cocher deleteMany
   */
  export type cocherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cochers to delete
     */
    where?: cocherWhereInput
    /**
     * Limit how many cochers to delete.
     */
    limit?: number
  }

  /**
   * cocher without action
   */
  export type cocherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cocher
     */
    select?: cocherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cocher
     */
    omit?: cocherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cocherInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UtilisateurScalarFieldEnum: {
    id_utilisateur: 'id_utilisateur',
    nom: 'nom',
    prenom: 'prenom',
    mail: 'mail',
    mot_de_passe: 'mot_de_passe',
    date_de_naissance: 'date_de_naissance',
    tel: 'tel'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id_destination: 'id_destination',
    pays: 'pays',
    region: 'region',
    description: 'description',
    avis_global: 'avis_global',
    image1: 'image1',
    image2: 'image2',
    image3: 'image3'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const CommentaireScalarFieldEnum: {
    id_commentaire: 'id_commentaire',
    note: 'note',
    contenu: 'contenu',
    date_commentaire: 'date_commentaire',
    image_commentaire: 'image_commentaire',
    utilisateurId: 'utilisateurId',
    destinationId: 'destinationId'
  };

  export type CommentaireScalarFieldEnum = (typeof CommentaireScalarFieldEnum)[keyof typeof CommentaireScalarFieldEnum]


  export const ActiviteScalarFieldEnum: {
    id_activite: 'id_activite',
    nom_activite: 'nom_activite',
    description_activite: 'description_activite',
    image_activite: 'image_activite',
    destinationId: 'destinationId'
  };

  export type ActiviteScalarFieldEnum = (typeof ActiviteScalarFieldEnum)[keyof typeof ActiviteScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id_contact: 'id_contact',
    nom: 'nom',
    prenom: 'prenom',
    mail: 'mail',
    message: 'message',
    date_envoie: 'date_envoie'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const CheckListe_ItemScalarFieldEnum: {
    id_checkliste_item: 'id_checkliste_item',
    nom_item: 'nom_item'
  };

  export type CheckListe_ItemScalarFieldEnum = (typeof CheckListe_ItemScalarFieldEnum)[keyof typeof CheckListe_ItemScalarFieldEnum]


  export const Formalite_administrative_ItemScalarFieldEnum: {
    id_formalite_administrative_item: 'id_formalite_administrative_item',
    descripition_formalite: 'descripition_formalite'
  };

  export type Formalite_administrative_ItemScalarFieldEnum = (typeof Formalite_administrative_ItemScalarFieldEnum)[keyof typeof Formalite_administrative_ItemScalarFieldEnum]


  export const Fait_parScalarFieldEnum: {
    utilisateurId: 'utilisateurId',
    destinationId: 'destinationId'
  };

  export type Fait_parScalarFieldEnum = (typeof Fait_parScalarFieldEnum)[keyof typeof Fait_parScalarFieldEnum]


  export const ContientScalarFieldEnum: {
    destinationId: 'destinationId',
    checklistItemId: 'checklistItemId'
  };

  export type ContientScalarFieldEnum = (typeof ContientScalarFieldEnum)[keyof typeof ContientScalarFieldEnum]


  export const RequiertScalarFieldEnum: {
    destinationId: 'destinationId',
    formaliteItemId: 'formaliteItemId'
  };

  export type RequiertScalarFieldEnum = (typeof RequiertScalarFieldEnum)[keyof typeof RequiertScalarFieldEnum]


  export const CocherScalarFieldEnum: {
    utilisateurId: 'utilisateurId',
    checklistItemId: 'checklistItemId',
    date_cocher: 'date_cocher'
  };

  export type CocherScalarFieldEnum = (typeof CocherScalarFieldEnum)[keyof typeof CocherScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id_utilisateur?: IntFilter<"Utilisateur"> | number
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    mail?: StringFilter<"Utilisateur"> | string
    mot_de_passe?: StringFilter<"Utilisateur"> | string
    date_de_naissance?: DateTimeFilter<"Utilisateur"> | Date | string
    tel?: StringFilter<"Utilisateur"> | string
    commentaires?: CommentaireListRelationFilter
    destinations?: Fait_parListRelationFilter
    coche_items?: CocherListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    mot_de_passe?: SortOrder
    date_de_naissance?: SortOrder
    tel?: SortOrder
    commentaires?: CommentaireOrderByRelationAggregateInput
    destinations?: fait_parOrderByRelationAggregateInput
    coche_items?: cocherOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id_utilisateur?: number
    mail?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    mot_de_passe?: StringFilter<"Utilisateur"> | string
    date_de_naissance?: DateTimeFilter<"Utilisateur"> | Date | string
    tel?: StringFilter<"Utilisateur"> | string
    commentaires?: CommentaireListRelationFilter
    destinations?: Fait_parListRelationFilter
    coche_items?: CocherListRelationFilter
  }, "id_utilisateur" | "mail">

  export type UtilisateurOrderByWithAggregationInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    mot_de_passe?: SortOrder
    date_de_naissance?: SortOrder
    tel?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id_utilisateur?: IntWithAggregatesFilter<"Utilisateur"> | number
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    prenom?: StringWithAggregatesFilter<"Utilisateur"> | string
    mail?: StringWithAggregatesFilter<"Utilisateur"> | string
    mot_de_passe?: StringWithAggregatesFilter<"Utilisateur"> | string
    date_de_naissance?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
    tel?: StringWithAggregatesFilter<"Utilisateur"> | string
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id_destination?: IntFilter<"Destination"> | number
    pays?: StringFilter<"Destination"> | string
    region?: StringFilter<"Destination"> | string
    description?: StringFilter<"Destination"> | string
    avis_global?: FloatFilter<"Destination"> | number
    image1?: StringFilter<"Destination"> | string
    image2?: StringFilter<"Destination"> | string
    image3?: StringFilter<"Destination"> | string
    commentaires?: CommentaireListRelationFilter
    activites?: ActiviteListRelationFilter
    utilisateurs?: Fait_parListRelationFilter
    checklist_items?: ContientListRelationFilter
    formalites?: RequiertListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id_destination?: SortOrder
    pays?: SortOrder
    region?: SortOrder
    description?: SortOrder
    avis_global?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    commentaires?: CommentaireOrderByRelationAggregateInput
    activites?: ActiviteOrderByRelationAggregateInput
    utilisateurs?: fait_parOrderByRelationAggregateInput
    checklist_items?: contientOrderByRelationAggregateInput
    formalites?: requiertOrderByRelationAggregateInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id_destination?: number
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    pays?: StringFilter<"Destination"> | string
    region?: StringFilter<"Destination"> | string
    description?: StringFilter<"Destination"> | string
    avis_global?: FloatFilter<"Destination"> | number
    image1?: StringFilter<"Destination"> | string
    image2?: StringFilter<"Destination"> | string
    image3?: StringFilter<"Destination"> | string
    commentaires?: CommentaireListRelationFilter
    activites?: ActiviteListRelationFilter
    utilisateurs?: Fait_parListRelationFilter
    checklist_items?: ContientListRelationFilter
    formalites?: RequiertListRelationFilter
  }, "id_destination">

  export type DestinationOrderByWithAggregationInput = {
    id_destination?: SortOrder
    pays?: SortOrder
    region?: SortOrder
    description?: SortOrder
    avis_global?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _avg?: DestinationAvgOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
    _sum?: DestinationSumOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id_destination?: IntWithAggregatesFilter<"Destination"> | number
    pays?: StringWithAggregatesFilter<"Destination"> | string
    region?: StringWithAggregatesFilter<"Destination"> | string
    description?: StringWithAggregatesFilter<"Destination"> | string
    avis_global?: FloatWithAggregatesFilter<"Destination"> | number
    image1?: StringWithAggregatesFilter<"Destination"> | string
    image2?: StringWithAggregatesFilter<"Destination"> | string
    image3?: StringWithAggregatesFilter<"Destination"> | string
  }

  export type CommentaireWhereInput = {
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    id_commentaire?: IntFilter<"Commentaire"> | number
    note?: IntFilter<"Commentaire"> | number
    contenu?: StringFilter<"Commentaire"> | string
    date_commentaire?: DateTimeFilter<"Commentaire"> | Date | string
    image_commentaire?: StringNullableFilter<"Commentaire"> | string | null
    utilisateurId?: IntFilter<"Commentaire"> | number
    destinationId?: IntFilter<"Commentaire"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type CommentaireOrderByWithRelationInput = {
    id_commentaire?: SortOrder
    note?: SortOrder
    contenu?: SortOrder
    date_commentaire?: SortOrder
    image_commentaire?: SortOrderInput | SortOrder
    utilisateurId?: SortOrder
    destinationId?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    destination?: DestinationOrderByWithRelationInput
  }

  export type CommentaireWhereUniqueInput = Prisma.AtLeast<{
    id_commentaire?: number
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    note?: IntFilter<"Commentaire"> | number
    contenu?: StringFilter<"Commentaire"> | string
    date_commentaire?: DateTimeFilter<"Commentaire"> | Date | string
    image_commentaire?: StringNullableFilter<"Commentaire"> | string | null
    utilisateurId?: IntFilter<"Commentaire"> | number
    destinationId?: IntFilter<"Commentaire"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id_commentaire">

  export type CommentaireOrderByWithAggregationInput = {
    id_commentaire?: SortOrder
    note?: SortOrder
    contenu?: SortOrder
    date_commentaire?: SortOrder
    image_commentaire?: SortOrderInput | SortOrder
    utilisateurId?: SortOrder
    destinationId?: SortOrder
    _count?: CommentaireCountOrderByAggregateInput
    _avg?: CommentaireAvgOrderByAggregateInput
    _max?: CommentaireMaxOrderByAggregateInput
    _min?: CommentaireMinOrderByAggregateInput
    _sum?: CommentaireSumOrderByAggregateInput
  }

  export type CommentaireScalarWhereWithAggregatesInput = {
    AND?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    OR?: CommentaireScalarWhereWithAggregatesInput[]
    NOT?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    id_commentaire?: IntWithAggregatesFilter<"Commentaire"> | number
    note?: IntWithAggregatesFilter<"Commentaire"> | number
    contenu?: StringWithAggregatesFilter<"Commentaire"> | string
    date_commentaire?: DateTimeWithAggregatesFilter<"Commentaire"> | Date | string
    image_commentaire?: StringNullableWithAggregatesFilter<"Commentaire"> | string | null
    utilisateurId?: IntWithAggregatesFilter<"Commentaire"> | number
    destinationId?: IntWithAggregatesFilter<"Commentaire"> | number
  }

  export type ActiviteWhereInput = {
    AND?: ActiviteWhereInput | ActiviteWhereInput[]
    OR?: ActiviteWhereInput[]
    NOT?: ActiviteWhereInput | ActiviteWhereInput[]
    id_activite?: IntFilter<"Activite"> | number
    nom_activite?: StringFilter<"Activite"> | string
    description_activite?: StringFilter<"Activite"> | string
    image_activite?: StringNullableFilter<"Activite"> | string | null
    destinationId?: IntFilter<"Activite"> | number
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type ActiviteOrderByWithRelationInput = {
    id_activite?: SortOrder
    nom_activite?: SortOrder
    description_activite?: SortOrder
    image_activite?: SortOrderInput | SortOrder
    destinationId?: SortOrder
    destination?: DestinationOrderByWithRelationInput
  }

  export type ActiviteWhereUniqueInput = Prisma.AtLeast<{
    id_activite?: number
    AND?: ActiviteWhereInput | ActiviteWhereInput[]
    OR?: ActiviteWhereInput[]
    NOT?: ActiviteWhereInput | ActiviteWhereInput[]
    nom_activite?: StringFilter<"Activite"> | string
    description_activite?: StringFilter<"Activite"> | string
    image_activite?: StringNullableFilter<"Activite"> | string | null
    destinationId?: IntFilter<"Activite"> | number
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id_activite">

  export type ActiviteOrderByWithAggregationInput = {
    id_activite?: SortOrder
    nom_activite?: SortOrder
    description_activite?: SortOrder
    image_activite?: SortOrderInput | SortOrder
    destinationId?: SortOrder
    _count?: ActiviteCountOrderByAggregateInput
    _avg?: ActiviteAvgOrderByAggregateInput
    _max?: ActiviteMaxOrderByAggregateInput
    _min?: ActiviteMinOrderByAggregateInput
    _sum?: ActiviteSumOrderByAggregateInput
  }

  export type ActiviteScalarWhereWithAggregatesInput = {
    AND?: ActiviteScalarWhereWithAggregatesInput | ActiviteScalarWhereWithAggregatesInput[]
    OR?: ActiviteScalarWhereWithAggregatesInput[]
    NOT?: ActiviteScalarWhereWithAggregatesInput | ActiviteScalarWhereWithAggregatesInput[]
    id_activite?: IntWithAggregatesFilter<"Activite"> | number
    nom_activite?: StringWithAggregatesFilter<"Activite"> | string
    description_activite?: StringWithAggregatesFilter<"Activite"> | string
    image_activite?: StringNullableWithAggregatesFilter<"Activite"> | string | null
    destinationId?: IntWithAggregatesFilter<"Activite"> | number
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id_contact?: IntFilter<"Contact"> | number
    nom?: StringFilter<"Contact"> | string
    prenom?: StringFilter<"Contact"> | string
    mail?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    date_envoie?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id_contact?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    message?: SortOrder
    date_envoie?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id_contact?: number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    nom?: StringFilter<"Contact"> | string
    prenom?: StringFilter<"Contact"> | string
    mail?: StringFilter<"Contact"> | string
    message?: StringFilter<"Contact"> | string
    date_envoie?: DateTimeFilter<"Contact"> | Date | string
  }, "id_contact">

  export type ContactOrderByWithAggregationInput = {
    id_contact?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    message?: SortOrder
    date_envoie?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id_contact?: IntWithAggregatesFilter<"Contact"> | number
    nom?: StringWithAggregatesFilter<"Contact"> | string
    prenom?: StringWithAggregatesFilter<"Contact"> | string
    mail?: StringWithAggregatesFilter<"Contact"> | string
    message?: StringWithAggregatesFilter<"Contact"> | string
    date_envoie?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type CheckListe_ItemWhereInput = {
    AND?: CheckListe_ItemWhereInput | CheckListe_ItemWhereInput[]
    OR?: CheckListe_ItemWhereInput[]
    NOT?: CheckListe_ItemWhereInput | CheckListe_ItemWhereInput[]
    id_checkliste_item?: IntFilter<"CheckListe_Item"> | number
    nom_item?: StringFilter<"CheckListe_Item"> | string
    destinations?: ContientListRelationFilter
    coche_utilisateurs?: CocherListRelationFilter
  }

  export type CheckListe_ItemOrderByWithRelationInput = {
    id_checkliste_item?: SortOrder
    nom_item?: SortOrder
    destinations?: contientOrderByRelationAggregateInput
    coche_utilisateurs?: cocherOrderByRelationAggregateInput
  }

  export type CheckListe_ItemWhereUniqueInput = Prisma.AtLeast<{
    id_checkliste_item?: number
    AND?: CheckListe_ItemWhereInput | CheckListe_ItemWhereInput[]
    OR?: CheckListe_ItemWhereInput[]
    NOT?: CheckListe_ItemWhereInput | CheckListe_ItemWhereInput[]
    nom_item?: StringFilter<"CheckListe_Item"> | string
    destinations?: ContientListRelationFilter
    coche_utilisateurs?: CocherListRelationFilter
  }, "id_checkliste_item">

  export type CheckListe_ItemOrderByWithAggregationInput = {
    id_checkliste_item?: SortOrder
    nom_item?: SortOrder
    _count?: CheckListe_ItemCountOrderByAggregateInput
    _avg?: CheckListe_ItemAvgOrderByAggregateInput
    _max?: CheckListe_ItemMaxOrderByAggregateInput
    _min?: CheckListe_ItemMinOrderByAggregateInput
    _sum?: CheckListe_ItemSumOrderByAggregateInput
  }

  export type CheckListe_ItemScalarWhereWithAggregatesInput = {
    AND?: CheckListe_ItemScalarWhereWithAggregatesInput | CheckListe_ItemScalarWhereWithAggregatesInput[]
    OR?: CheckListe_ItemScalarWhereWithAggregatesInput[]
    NOT?: CheckListe_ItemScalarWhereWithAggregatesInput | CheckListe_ItemScalarWhereWithAggregatesInput[]
    id_checkliste_item?: IntWithAggregatesFilter<"CheckListe_Item"> | number
    nom_item?: StringWithAggregatesFilter<"CheckListe_Item"> | string
  }

  export type Formalite_administrative_ItemWhereInput = {
    AND?: Formalite_administrative_ItemWhereInput | Formalite_administrative_ItemWhereInput[]
    OR?: Formalite_administrative_ItemWhereInput[]
    NOT?: Formalite_administrative_ItemWhereInput | Formalite_administrative_ItemWhereInput[]
    id_formalite_administrative_item?: IntFilter<"Formalite_administrative_Item"> | number
    descripition_formalite?: StringFilter<"Formalite_administrative_Item"> | string
    destinations?: RequiertListRelationFilter
  }

  export type Formalite_administrative_ItemOrderByWithRelationInput = {
    id_formalite_administrative_item?: SortOrder
    descripition_formalite?: SortOrder
    destinations?: requiertOrderByRelationAggregateInput
  }

  export type Formalite_administrative_ItemWhereUniqueInput = Prisma.AtLeast<{
    id_formalite_administrative_item?: number
    AND?: Formalite_administrative_ItemWhereInput | Formalite_administrative_ItemWhereInput[]
    OR?: Formalite_administrative_ItemWhereInput[]
    NOT?: Formalite_administrative_ItemWhereInput | Formalite_administrative_ItemWhereInput[]
    descripition_formalite?: StringFilter<"Formalite_administrative_Item"> | string
    destinations?: RequiertListRelationFilter
  }, "id_formalite_administrative_item">

  export type Formalite_administrative_ItemOrderByWithAggregationInput = {
    id_formalite_administrative_item?: SortOrder
    descripition_formalite?: SortOrder
    _count?: Formalite_administrative_ItemCountOrderByAggregateInput
    _avg?: Formalite_administrative_ItemAvgOrderByAggregateInput
    _max?: Formalite_administrative_ItemMaxOrderByAggregateInput
    _min?: Formalite_administrative_ItemMinOrderByAggregateInput
    _sum?: Formalite_administrative_ItemSumOrderByAggregateInput
  }

  export type Formalite_administrative_ItemScalarWhereWithAggregatesInput = {
    AND?: Formalite_administrative_ItemScalarWhereWithAggregatesInput | Formalite_administrative_ItemScalarWhereWithAggregatesInput[]
    OR?: Formalite_administrative_ItemScalarWhereWithAggregatesInput[]
    NOT?: Formalite_administrative_ItemScalarWhereWithAggregatesInput | Formalite_administrative_ItemScalarWhereWithAggregatesInput[]
    id_formalite_administrative_item?: IntWithAggregatesFilter<"Formalite_administrative_Item"> | number
    descripition_formalite?: StringWithAggregatesFilter<"Formalite_administrative_Item"> | string
  }

  export type fait_parWhereInput = {
    AND?: fait_parWhereInput | fait_parWhereInput[]
    OR?: fait_parWhereInput[]
    NOT?: fait_parWhereInput | fait_parWhereInput[]
    utilisateurId?: IntFilter<"fait_par"> | number
    destinationId?: IntFilter<"fait_par"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type fait_parOrderByWithRelationInput = {
    utilisateurId?: SortOrder
    destinationId?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    destination?: DestinationOrderByWithRelationInput
  }

  export type fait_parWhereUniqueInput = Prisma.AtLeast<{
    utilisateurId_destinationId?: fait_parUtilisateurIdDestinationIdCompoundUniqueInput
    AND?: fait_parWhereInput | fait_parWhereInput[]
    OR?: fait_parWhereInput[]
    NOT?: fait_parWhereInput | fait_parWhereInput[]
    utilisateurId?: IntFilter<"fait_par"> | number
    destinationId?: IntFilter<"fait_par"> | number
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "utilisateurId_destinationId">

  export type fait_parOrderByWithAggregationInput = {
    utilisateurId?: SortOrder
    destinationId?: SortOrder
    _count?: fait_parCountOrderByAggregateInput
    _avg?: fait_parAvgOrderByAggregateInput
    _max?: fait_parMaxOrderByAggregateInput
    _min?: fait_parMinOrderByAggregateInput
    _sum?: fait_parSumOrderByAggregateInput
  }

  export type fait_parScalarWhereWithAggregatesInput = {
    AND?: fait_parScalarWhereWithAggregatesInput | fait_parScalarWhereWithAggregatesInput[]
    OR?: fait_parScalarWhereWithAggregatesInput[]
    NOT?: fait_parScalarWhereWithAggregatesInput | fait_parScalarWhereWithAggregatesInput[]
    utilisateurId?: IntWithAggregatesFilter<"fait_par"> | number
    destinationId?: IntWithAggregatesFilter<"fait_par"> | number
  }

  export type contientWhereInput = {
    AND?: contientWhereInput | contientWhereInput[]
    OR?: contientWhereInput[]
    NOT?: contientWhereInput | contientWhereInput[]
    destinationId?: IntFilter<"contient"> | number
    checklistItemId?: IntFilter<"contient"> | number
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    checklist_item?: XOR<CheckListe_ItemScalarRelationFilter, CheckListe_ItemWhereInput>
  }

  export type contientOrderByWithRelationInput = {
    destinationId?: SortOrder
    checklistItemId?: SortOrder
    destination?: DestinationOrderByWithRelationInput
    checklist_item?: CheckListe_ItemOrderByWithRelationInput
  }

  export type contientWhereUniqueInput = Prisma.AtLeast<{
    destinationId_checklistItemId?: contientDestinationIdChecklistItemIdCompoundUniqueInput
    AND?: contientWhereInput | contientWhereInput[]
    OR?: contientWhereInput[]
    NOT?: contientWhereInput | contientWhereInput[]
    destinationId?: IntFilter<"contient"> | number
    checklistItemId?: IntFilter<"contient"> | number
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    checklist_item?: XOR<CheckListe_ItemScalarRelationFilter, CheckListe_ItemWhereInput>
  }, "destinationId_checklistItemId">

  export type contientOrderByWithAggregationInput = {
    destinationId?: SortOrder
    checklistItemId?: SortOrder
    _count?: contientCountOrderByAggregateInput
    _avg?: contientAvgOrderByAggregateInput
    _max?: contientMaxOrderByAggregateInput
    _min?: contientMinOrderByAggregateInput
    _sum?: contientSumOrderByAggregateInput
  }

  export type contientScalarWhereWithAggregatesInput = {
    AND?: contientScalarWhereWithAggregatesInput | contientScalarWhereWithAggregatesInput[]
    OR?: contientScalarWhereWithAggregatesInput[]
    NOT?: contientScalarWhereWithAggregatesInput | contientScalarWhereWithAggregatesInput[]
    destinationId?: IntWithAggregatesFilter<"contient"> | number
    checklistItemId?: IntWithAggregatesFilter<"contient"> | number
  }

  export type requiertWhereInput = {
    AND?: requiertWhereInput | requiertWhereInput[]
    OR?: requiertWhereInput[]
    NOT?: requiertWhereInput | requiertWhereInput[]
    destinationId?: IntFilter<"requiert"> | number
    formaliteItemId?: IntFilter<"requiert"> | number
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    formalite?: XOR<Formalite_administrative_ItemScalarRelationFilter, Formalite_administrative_ItemWhereInput>
  }

  export type requiertOrderByWithRelationInput = {
    destinationId?: SortOrder
    formaliteItemId?: SortOrder
    destination?: DestinationOrderByWithRelationInput
    formalite?: Formalite_administrative_ItemOrderByWithRelationInput
  }

  export type requiertWhereUniqueInput = Prisma.AtLeast<{
    destinationId_formaliteItemId?: requiertDestinationIdFormaliteItemIdCompoundUniqueInput
    AND?: requiertWhereInput | requiertWhereInput[]
    OR?: requiertWhereInput[]
    NOT?: requiertWhereInput | requiertWhereInput[]
    destinationId?: IntFilter<"requiert"> | number
    formaliteItemId?: IntFilter<"requiert"> | number
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    formalite?: XOR<Formalite_administrative_ItemScalarRelationFilter, Formalite_administrative_ItemWhereInput>
  }, "destinationId_formaliteItemId">

  export type requiertOrderByWithAggregationInput = {
    destinationId?: SortOrder
    formaliteItemId?: SortOrder
    _count?: requiertCountOrderByAggregateInput
    _avg?: requiertAvgOrderByAggregateInput
    _max?: requiertMaxOrderByAggregateInput
    _min?: requiertMinOrderByAggregateInput
    _sum?: requiertSumOrderByAggregateInput
  }

  export type requiertScalarWhereWithAggregatesInput = {
    AND?: requiertScalarWhereWithAggregatesInput | requiertScalarWhereWithAggregatesInput[]
    OR?: requiertScalarWhereWithAggregatesInput[]
    NOT?: requiertScalarWhereWithAggregatesInput | requiertScalarWhereWithAggregatesInput[]
    destinationId?: IntWithAggregatesFilter<"requiert"> | number
    formaliteItemId?: IntWithAggregatesFilter<"requiert"> | number
  }

  export type cocherWhereInput = {
    AND?: cocherWhereInput | cocherWhereInput[]
    OR?: cocherWhereInput[]
    NOT?: cocherWhereInput | cocherWhereInput[]
    utilisateurId?: IntFilter<"cocher"> | number
    checklistItemId?: IntFilter<"cocher"> | number
    date_cocher?: DateTimeFilter<"cocher"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    checklist_item?: XOR<CheckListe_ItemScalarRelationFilter, CheckListe_ItemWhereInput>
  }

  export type cocherOrderByWithRelationInput = {
    utilisateurId?: SortOrder
    checklistItemId?: SortOrder
    date_cocher?: SortOrder
    utilisateur?: UtilisateurOrderByWithRelationInput
    checklist_item?: CheckListe_ItemOrderByWithRelationInput
  }

  export type cocherWhereUniqueInput = Prisma.AtLeast<{
    utilisateurId_checklistItemId?: cocherUtilisateurIdChecklistItemIdCompoundUniqueInput
    AND?: cocherWhereInput | cocherWhereInput[]
    OR?: cocherWhereInput[]
    NOT?: cocherWhereInput | cocherWhereInput[]
    utilisateurId?: IntFilter<"cocher"> | number
    checklistItemId?: IntFilter<"cocher"> | number
    date_cocher?: DateTimeFilter<"cocher"> | Date | string
    utilisateur?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    checklist_item?: XOR<CheckListe_ItemScalarRelationFilter, CheckListe_ItemWhereInput>
  }, "utilisateurId_checklistItemId">

  export type cocherOrderByWithAggregationInput = {
    utilisateurId?: SortOrder
    checklistItemId?: SortOrder
    date_cocher?: SortOrder
    _count?: cocherCountOrderByAggregateInput
    _avg?: cocherAvgOrderByAggregateInput
    _max?: cocherMaxOrderByAggregateInput
    _min?: cocherMinOrderByAggregateInput
    _sum?: cocherSumOrderByAggregateInput
  }

  export type cocherScalarWhereWithAggregatesInput = {
    AND?: cocherScalarWhereWithAggregatesInput | cocherScalarWhereWithAggregatesInput[]
    OR?: cocherScalarWhereWithAggregatesInput[]
    NOT?: cocherScalarWhereWithAggregatesInput | cocherScalarWhereWithAggregatesInput[]
    utilisateurId?: IntWithAggregatesFilter<"cocher"> | number
    checklistItemId?: IntWithAggregatesFilter<"cocher"> | number
    date_cocher?: DateTimeWithAggregatesFilter<"cocher"> | Date | string
  }

  export type UtilisateurCreateInput = {
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date | string
    tel: string
    commentaires?: CommentaireCreateNestedManyWithoutUtilisateurInput
    destinations?: fait_parCreateNestedManyWithoutUtilisateurInput
    coche_items?: cocherCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id_utilisateur?: number
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date | string
    tel: string
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUtilisateurInput
    destinations?: fait_parUncheckedCreateNestedManyWithoutUtilisateurInput
    coche_items?: cocherUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUpdateManyWithoutUtilisateurNestedInput
    destinations?: fait_parUpdateManyWithoutUtilisateurNestedInput
    coche_items?: cocherUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id_utilisateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUncheckedUpdateManyWithoutUtilisateurNestedInput
    destinations?: fait_parUncheckedUpdateManyWithoutUtilisateurNestedInput
    coche_items?: cocherUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id_utilisateur?: number
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date | string
    tel: string
  }

  export type UtilisateurUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id_utilisateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationCreateInput = {
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireCreateNestedManyWithoutDestinationInput
    activites?: ActiviteCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parCreateNestedManyWithoutDestinationInput
    checklist_items?: contientCreateNestedManyWithoutDestinationInput
    formalites?: requiertCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id_destination?: number
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDestinationInput
    activites?: ActiviteUncheckedCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parUncheckedCreateNestedManyWithoutDestinationInput
    checklist_items?: contientUncheckedCreateNestedManyWithoutDestinationInput
    formalites?: requiertUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUpdateManyWithoutDestinationNestedInput
    activites?: ActiviteUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id_destination?: IntFieldUpdateOperationsInput | number
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUncheckedUpdateManyWithoutDestinationNestedInput
    activites?: ActiviteUncheckedUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUncheckedUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUncheckedUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id_destination?: number
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
  }

  export type DestinationUpdateManyMutationInput = {
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id_destination?: IntFieldUpdateOperationsInput | number
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
  }

  export type CommentaireCreateInput = {
    note: number
    contenu: string
    date_commentaire: Date | string
    image_commentaire?: string | null
    utilisateur: UtilisateurCreateNestedOneWithoutCommentairesInput
    destination: DestinationCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateInput = {
    id_commentaire?: number
    note: number
    contenu: string
    date_commentaire: Date | string
    image_commentaire?: string | null
    utilisateurId: number
    destinationId: number
  }

  export type CommentaireUpdateInput = {
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateur?: UtilisateurUpdateOneRequiredWithoutCommentairesNestedInput
    destination?: DestinationUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateInput = {
    id_commentaire?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateurId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentaireCreateManyInput = {
    id_commentaire?: number
    note: number
    contenu: string
    date_commentaire: Date | string
    image_commentaire?: string | null
    utilisateurId: number
    destinationId: number
  }

  export type CommentaireUpdateManyMutationInput = {
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentaireUncheckedUpdateManyInput = {
    id_commentaire?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateurId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type ActiviteCreateInput = {
    nom_activite: string
    description_activite: string
    image_activite?: string | null
    destination: DestinationCreateNestedOneWithoutActivitesInput
  }

  export type ActiviteUncheckedCreateInput = {
    id_activite?: number
    nom_activite: string
    description_activite: string
    image_activite?: string | null
    destinationId: number
  }

  export type ActiviteUpdateInput = {
    nom_activite?: StringFieldUpdateOperationsInput | string
    description_activite?: StringFieldUpdateOperationsInput | string
    image_activite?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: DestinationUpdateOneRequiredWithoutActivitesNestedInput
  }

  export type ActiviteUncheckedUpdateInput = {
    id_activite?: IntFieldUpdateOperationsInput | number
    nom_activite?: StringFieldUpdateOperationsInput | string
    description_activite?: StringFieldUpdateOperationsInput | string
    image_activite?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type ActiviteCreateManyInput = {
    id_activite?: number
    nom_activite: string
    description_activite: string
    image_activite?: string | null
    destinationId: number
  }

  export type ActiviteUpdateManyMutationInput = {
    nom_activite?: StringFieldUpdateOperationsInput | string
    description_activite?: StringFieldUpdateOperationsInput | string
    image_activite?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActiviteUncheckedUpdateManyInput = {
    id_activite?: IntFieldUpdateOperationsInput | number
    nom_activite?: StringFieldUpdateOperationsInput | string
    description_activite?: StringFieldUpdateOperationsInput | string
    image_activite?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactCreateInput = {
    nom: string
    prenom: string
    mail: string
    message: string
    date_envoie: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id_contact?: number
    nom: string
    prenom: string
    mail: string
    message: string
    date_envoie: Date | string
  }

  export type ContactUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_envoie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id_contact?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_envoie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id_contact?: number
    nom: string
    prenom: string
    mail: string
    message: string
    date_envoie: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_envoie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id_contact?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_envoie?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckListe_ItemCreateInput = {
    nom_item: string
    destinations?: contientCreateNestedManyWithoutChecklist_itemInput
    coche_utilisateurs?: cocherCreateNestedManyWithoutChecklist_itemInput
  }

  export type CheckListe_ItemUncheckedCreateInput = {
    id_checkliste_item?: number
    nom_item: string
    destinations?: contientUncheckedCreateNestedManyWithoutChecklist_itemInput
    coche_utilisateurs?: cocherUncheckedCreateNestedManyWithoutChecklist_itemInput
  }

  export type CheckListe_ItemUpdateInput = {
    nom_item?: StringFieldUpdateOperationsInput | string
    destinations?: contientUpdateManyWithoutChecklist_itemNestedInput
    coche_utilisateurs?: cocherUpdateManyWithoutChecklist_itemNestedInput
  }

  export type CheckListe_ItemUncheckedUpdateInput = {
    id_checkliste_item?: IntFieldUpdateOperationsInput | number
    nom_item?: StringFieldUpdateOperationsInput | string
    destinations?: contientUncheckedUpdateManyWithoutChecklist_itemNestedInput
    coche_utilisateurs?: cocherUncheckedUpdateManyWithoutChecklist_itemNestedInput
  }

  export type CheckListe_ItemCreateManyInput = {
    id_checkliste_item?: number
    nom_item: string
  }

  export type CheckListe_ItemUpdateManyMutationInput = {
    nom_item?: StringFieldUpdateOperationsInput | string
  }

  export type CheckListe_ItemUncheckedUpdateManyInput = {
    id_checkliste_item?: IntFieldUpdateOperationsInput | number
    nom_item?: StringFieldUpdateOperationsInput | string
  }

  export type Formalite_administrative_ItemCreateInput = {
    descripition_formalite: string
    destinations?: requiertCreateNestedManyWithoutFormaliteInput
  }

  export type Formalite_administrative_ItemUncheckedCreateInput = {
    id_formalite_administrative_item?: number
    descripition_formalite: string
    destinations?: requiertUncheckedCreateNestedManyWithoutFormaliteInput
  }

  export type Formalite_administrative_ItemUpdateInput = {
    descripition_formalite?: StringFieldUpdateOperationsInput | string
    destinations?: requiertUpdateManyWithoutFormaliteNestedInput
  }

  export type Formalite_administrative_ItemUncheckedUpdateInput = {
    id_formalite_administrative_item?: IntFieldUpdateOperationsInput | number
    descripition_formalite?: StringFieldUpdateOperationsInput | string
    destinations?: requiertUncheckedUpdateManyWithoutFormaliteNestedInput
  }

  export type Formalite_administrative_ItemCreateManyInput = {
    id_formalite_administrative_item?: number
    descripition_formalite: string
  }

  export type Formalite_administrative_ItemUpdateManyMutationInput = {
    descripition_formalite?: StringFieldUpdateOperationsInput | string
  }

  export type Formalite_administrative_ItemUncheckedUpdateManyInput = {
    id_formalite_administrative_item?: IntFieldUpdateOperationsInput | number
    descripition_formalite?: StringFieldUpdateOperationsInput | string
  }

  export type fait_parCreateInput = {
    utilisateur: UtilisateurCreateNestedOneWithoutDestinationsInput
    destination: DestinationCreateNestedOneWithoutUtilisateursInput
  }

  export type fait_parUncheckedCreateInput = {
    utilisateurId: number
    destinationId: number
  }

  export type fait_parUpdateInput = {
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDestinationsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutUtilisateursNestedInput
  }

  export type fait_parUncheckedUpdateInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type fait_parCreateManyInput = {
    utilisateurId: number
    destinationId: number
  }

  export type fait_parUpdateManyMutationInput = {

  }

  export type fait_parUncheckedUpdateManyInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type contientCreateInput = {
    destination: DestinationCreateNestedOneWithoutChecklist_itemsInput
    checklist_item: CheckListe_ItemCreateNestedOneWithoutDestinationsInput
  }

  export type contientUncheckedCreateInput = {
    destinationId: number
    checklistItemId: number
  }

  export type contientUpdateInput = {
    destination?: DestinationUpdateOneRequiredWithoutChecklist_itemsNestedInput
    checklist_item?: CheckListe_ItemUpdateOneRequiredWithoutDestinationsNestedInput
  }

  export type contientUncheckedUpdateInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
    checklistItemId?: IntFieldUpdateOperationsInput | number
  }

  export type contientCreateManyInput = {
    destinationId: number
    checklistItemId: number
  }

  export type contientUpdateManyMutationInput = {

  }

  export type contientUncheckedUpdateManyInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
    checklistItemId?: IntFieldUpdateOperationsInput | number
  }

  export type requiertCreateInput = {
    destination: DestinationCreateNestedOneWithoutFormalitesInput
    formalite: Formalite_administrative_ItemCreateNestedOneWithoutDestinationsInput
  }

  export type requiertUncheckedCreateInput = {
    destinationId: number
    formaliteItemId: number
  }

  export type requiertUpdateInput = {
    destination?: DestinationUpdateOneRequiredWithoutFormalitesNestedInput
    formalite?: Formalite_administrative_ItemUpdateOneRequiredWithoutDestinationsNestedInput
  }

  export type requiertUncheckedUpdateInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
    formaliteItemId?: IntFieldUpdateOperationsInput | number
  }

  export type requiertCreateManyInput = {
    destinationId: number
    formaliteItemId: number
  }

  export type requiertUpdateManyMutationInput = {

  }

  export type requiertUncheckedUpdateManyInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
    formaliteItemId?: IntFieldUpdateOperationsInput | number
  }

  export type cocherCreateInput = {
    date_cocher: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutCoche_itemsInput
    checklist_item: CheckListe_ItemCreateNestedOneWithoutCoche_utilisateursInput
  }

  export type cocherUncheckedCreateInput = {
    utilisateurId: number
    checklistItemId: number
    date_cocher: Date | string
  }

  export type cocherUpdateInput = {
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutCoche_itemsNestedInput
    checklist_item?: CheckListe_ItemUpdateOneRequiredWithoutCoche_utilisateursNestedInput
  }

  export type cocherUncheckedUpdateInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    checklistItemId?: IntFieldUpdateOperationsInput | number
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cocherCreateManyInput = {
    utilisateurId: number
    checklistItemId: number
    date_cocher: Date | string
  }

  export type cocherUpdateManyMutationInput = {
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cocherUncheckedUpdateManyInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    checklistItemId?: IntFieldUpdateOperationsInput | number
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CommentaireListRelationFilter = {
    every?: CommentaireWhereInput
    some?: CommentaireWhereInput
    none?: CommentaireWhereInput
  }

  export type Fait_parListRelationFilter = {
    every?: fait_parWhereInput
    some?: fait_parWhereInput
    none?: fait_parWhereInput
  }

  export type CocherListRelationFilter = {
    every?: cocherWhereInput
    some?: cocherWhereInput
    none?: cocherWhereInput
  }

  export type CommentaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fait_parOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cocherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    mot_de_passe?: SortOrder
    date_de_naissance?: SortOrder
    tel?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id_utilisateur?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    mot_de_passe?: SortOrder
    date_de_naissance?: SortOrder
    tel?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id_utilisateur?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    mot_de_passe?: SortOrder
    date_de_naissance?: SortOrder
    tel?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
    id_utilisateur?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ActiviteListRelationFilter = {
    every?: ActiviteWhereInput
    some?: ActiviteWhereInput
    none?: ActiviteWhereInput
  }

  export type ContientListRelationFilter = {
    every?: contientWhereInput
    some?: contientWhereInput
    none?: contientWhereInput
  }

  export type RequiertListRelationFilter = {
    every?: requiertWhereInput
    some?: requiertWhereInput
    none?: requiertWhereInput
  }

  export type ActiviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type contientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type requiertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationCountOrderByAggregateInput = {
    id_destination?: SortOrder
    pays?: SortOrder
    region?: SortOrder
    description?: SortOrder
    avis_global?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
  }

  export type DestinationAvgOrderByAggregateInput = {
    id_destination?: SortOrder
    avis_global?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id_destination?: SortOrder
    pays?: SortOrder
    region?: SortOrder
    description?: SortOrder
    avis_global?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id_destination?: SortOrder
    pays?: SortOrder
    region?: SortOrder
    description?: SortOrder
    avis_global?: SortOrder
    image1?: SortOrder
    image2?: SortOrder
    image3?: SortOrder
  }

  export type DestinationSumOrderByAggregateInput = {
    id_destination?: SortOrder
    avis_global?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type DestinationScalarRelationFilter = {
    is?: DestinationWhereInput
    isNot?: DestinationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentaireCountOrderByAggregateInput = {
    id_commentaire?: SortOrder
    note?: SortOrder
    contenu?: SortOrder
    date_commentaire?: SortOrder
    image_commentaire?: SortOrder
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type CommentaireAvgOrderByAggregateInput = {
    id_commentaire?: SortOrder
    note?: SortOrder
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type CommentaireMaxOrderByAggregateInput = {
    id_commentaire?: SortOrder
    note?: SortOrder
    contenu?: SortOrder
    date_commentaire?: SortOrder
    image_commentaire?: SortOrder
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type CommentaireMinOrderByAggregateInput = {
    id_commentaire?: SortOrder
    note?: SortOrder
    contenu?: SortOrder
    date_commentaire?: SortOrder
    image_commentaire?: SortOrder
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type CommentaireSumOrderByAggregateInput = {
    id_commentaire?: SortOrder
    note?: SortOrder
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ActiviteCountOrderByAggregateInput = {
    id_activite?: SortOrder
    nom_activite?: SortOrder
    description_activite?: SortOrder
    image_activite?: SortOrder
    destinationId?: SortOrder
  }

  export type ActiviteAvgOrderByAggregateInput = {
    id_activite?: SortOrder
    destinationId?: SortOrder
  }

  export type ActiviteMaxOrderByAggregateInput = {
    id_activite?: SortOrder
    nom_activite?: SortOrder
    description_activite?: SortOrder
    image_activite?: SortOrder
    destinationId?: SortOrder
  }

  export type ActiviteMinOrderByAggregateInput = {
    id_activite?: SortOrder
    nom_activite?: SortOrder
    description_activite?: SortOrder
    image_activite?: SortOrder
    destinationId?: SortOrder
  }

  export type ActiviteSumOrderByAggregateInput = {
    id_activite?: SortOrder
    destinationId?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id_contact?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    message?: SortOrder
    date_envoie?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id_contact?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id_contact?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    message?: SortOrder
    date_envoie?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id_contact?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    mail?: SortOrder
    message?: SortOrder
    date_envoie?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id_contact?: SortOrder
  }

  export type CheckListe_ItemCountOrderByAggregateInput = {
    id_checkliste_item?: SortOrder
    nom_item?: SortOrder
  }

  export type CheckListe_ItemAvgOrderByAggregateInput = {
    id_checkliste_item?: SortOrder
  }

  export type CheckListe_ItemMaxOrderByAggregateInput = {
    id_checkliste_item?: SortOrder
    nom_item?: SortOrder
  }

  export type CheckListe_ItemMinOrderByAggregateInput = {
    id_checkliste_item?: SortOrder
    nom_item?: SortOrder
  }

  export type CheckListe_ItemSumOrderByAggregateInput = {
    id_checkliste_item?: SortOrder
  }

  export type Formalite_administrative_ItemCountOrderByAggregateInput = {
    id_formalite_administrative_item?: SortOrder
    descripition_formalite?: SortOrder
  }

  export type Formalite_administrative_ItemAvgOrderByAggregateInput = {
    id_formalite_administrative_item?: SortOrder
  }

  export type Formalite_administrative_ItemMaxOrderByAggregateInput = {
    id_formalite_administrative_item?: SortOrder
    descripition_formalite?: SortOrder
  }

  export type Formalite_administrative_ItemMinOrderByAggregateInput = {
    id_formalite_administrative_item?: SortOrder
    descripition_formalite?: SortOrder
  }

  export type Formalite_administrative_ItemSumOrderByAggregateInput = {
    id_formalite_administrative_item?: SortOrder
  }

  export type fait_parUtilisateurIdDestinationIdCompoundUniqueInput = {
    utilisateurId: number
    destinationId: number
  }

  export type fait_parCountOrderByAggregateInput = {
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type fait_parAvgOrderByAggregateInput = {
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type fait_parMaxOrderByAggregateInput = {
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type fait_parMinOrderByAggregateInput = {
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type fait_parSumOrderByAggregateInput = {
    utilisateurId?: SortOrder
    destinationId?: SortOrder
  }

  export type CheckListe_ItemScalarRelationFilter = {
    is?: CheckListe_ItemWhereInput
    isNot?: CheckListe_ItemWhereInput
  }

  export type contientDestinationIdChecklistItemIdCompoundUniqueInput = {
    destinationId: number
    checklistItemId: number
  }

  export type contientCountOrderByAggregateInput = {
    destinationId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type contientAvgOrderByAggregateInput = {
    destinationId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type contientMaxOrderByAggregateInput = {
    destinationId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type contientMinOrderByAggregateInput = {
    destinationId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type contientSumOrderByAggregateInput = {
    destinationId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type Formalite_administrative_ItemScalarRelationFilter = {
    is?: Formalite_administrative_ItemWhereInput
    isNot?: Formalite_administrative_ItemWhereInput
  }

  export type requiertDestinationIdFormaliteItemIdCompoundUniqueInput = {
    destinationId: number
    formaliteItemId: number
  }

  export type requiertCountOrderByAggregateInput = {
    destinationId?: SortOrder
    formaliteItemId?: SortOrder
  }

  export type requiertAvgOrderByAggregateInput = {
    destinationId?: SortOrder
    formaliteItemId?: SortOrder
  }

  export type requiertMaxOrderByAggregateInput = {
    destinationId?: SortOrder
    formaliteItemId?: SortOrder
  }

  export type requiertMinOrderByAggregateInput = {
    destinationId?: SortOrder
    formaliteItemId?: SortOrder
  }

  export type requiertSumOrderByAggregateInput = {
    destinationId?: SortOrder
    formaliteItemId?: SortOrder
  }

  export type cocherUtilisateurIdChecklistItemIdCompoundUniqueInput = {
    utilisateurId: number
    checklistItemId: number
  }

  export type cocherCountOrderByAggregateInput = {
    utilisateurId?: SortOrder
    checklistItemId?: SortOrder
    date_cocher?: SortOrder
  }

  export type cocherAvgOrderByAggregateInput = {
    utilisateurId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type cocherMaxOrderByAggregateInput = {
    utilisateurId?: SortOrder
    checklistItemId?: SortOrder
    date_cocher?: SortOrder
  }

  export type cocherMinOrderByAggregateInput = {
    utilisateurId?: SortOrder
    checklistItemId?: SortOrder
    date_cocher?: SortOrder
  }

  export type cocherSumOrderByAggregateInput = {
    utilisateurId?: SortOrder
    checklistItemId?: SortOrder
  }

  export type CommentaireCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput> | CommentaireCreateWithoutUtilisateurInput[] | CommentaireUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUtilisateurInput | CommentaireCreateOrConnectWithoutUtilisateurInput[]
    createMany?: CommentaireCreateManyUtilisateurInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type fait_parCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<fait_parCreateWithoutUtilisateurInput, fait_parUncheckedCreateWithoutUtilisateurInput> | fait_parCreateWithoutUtilisateurInput[] | fait_parUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: fait_parCreateOrConnectWithoutUtilisateurInput | fait_parCreateOrConnectWithoutUtilisateurInput[]
    createMany?: fait_parCreateManyUtilisateurInputEnvelope
    connect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
  }

  export type cocherCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<cocherCreateWithoutUtilisateurInput, cocherUncheckedCreateWithoutUtilisateurInput> | cocherCreateWithoutUtilisateurInput[] | cocherUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: cocherCreateOrConnectWithoutUtilisateurInput | cocherCreateOrConnectWithoutUtilisateurInput[]
    createMany?: cocherCreateManyUtilisateurInputEnvelope
    connect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput> | CommentaireCreateWithoutUtilisateurInput[] | CommentaireUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUtilisateurInput | CommentaireCreateOrConnectWithoutUtilisateurInput[]
    createMany?: CommentaireCreateManyUtilisateurInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type fait_parUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<fait_parCreateWithoutUtilisateurInput, fait_parUncheckedCreateWithoutUtilisateurInput> | fait_parCreateWithoutUtilisateurInput[] | fait_parUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: fait_parCreateOrConnectWithoutUtilisateurInput | fait_parCreateOrConnectWithoutUtilisateurInput[]
    createMany?: fait_parCreateManyUtilisateurInputEnvelope
    connect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
  }

  export type cocherUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<cocherCreateWithoutUtilisateurInput, cocherUncheckedCreateWithoutUtilisateurInput> | cocherCreateWithoutUtilisateurInput[] | cocherUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: cocherCreateOrConnectWithoutUtilisateurInput | cocherCreateOrConnectWithoutUtilisateurInput[]
    createMany?: cocherCreateManyUtilisateurInputEnvelope
    connect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CommentaireUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput> | CommentaireCreateWithoutUtilisateurInput[] | CommentaireUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUtilisateurInput | CommentaireCreateOrConnectWithoutUtilisateurInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput | CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: CommentaireCreateManyUtilisateurInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput | CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutUtilisateurInput | CommentaireUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type fait_parUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<fait_parCreateWithoutUtilisateurInput, fait_parUncheckedCreateWithoutUtilisateurInput> | fait_parCreateWithoutUtilisateurInput[] | fait_parUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: fait_parCreateOrConnectWithoutUtilisateurInput | fait_parCreateOrConnectWithoutUtilisateurInput[]
    upsert?: fait_parUpsertWithWhereUniqueWithoutUtilisateurInput | fait_parUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: fait_parCreateManyUtilisateurInputEnvelope
    set?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    disconnect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    delete?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    connect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    update?: fait_parUpdateWithWhereUniqueWithoutUtilisateurInput | fait_parUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: fait_parUpdateManyWithWhereWithoutUtilisateurInput | fait_parUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: fait_parScalarWhereInput | fait_parScalarWhereInput[]
  }

  export type cocherUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<cocherCreateWithoutUtilisateurInput, cocherUncheckedCreateWithoutUtilisateurInput> | cocherCreateWithoutUtilisateurInput[] | cocherUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: cocherCreateOrConnectWithoutUtilisateurInput | cocherCreateOrConnectWithoutUtilisateurInput[]
    upsert?: cocherUpsertWithWhereUniqueWithoutUtilisateurInput | cocherUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: cocherCreateManyUtilisateurInputEnvelope
    set?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    disconnect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    delete?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    connect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    update?: cocherUpdateWithWhereUniqueWithoutUtilisateurInput | cocherUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: cocherUpdateManyWithWhereWithoutUtilisateurInput | cocherUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: cocherScalarWhereInput | cocherScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentaireUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput> | CommentaireCreateWithoutUtilisateurInput[] | CommentaireUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutUtilisateurInput | CommentaireCreateOrConnectWithoutUtilisateurInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput | CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: CommentaireCreateManyUtilisateurInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput | CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutUtilisateurInput | CommentaireUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type fait_parUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<fait_parCreateWithoutUtilisateurInput, fait_parUncheckedCreateWithoutUtilisateurInput> | fait_parCreateWithoutUtilisateurInput[] | fait_parUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: fait_parCreateOrConnectWithoutUtilisateurInput | fait_parCreateOrConnectWithoutUtilisateurInput[]
    upsert?: fait_parUpsertWithWhereUniqueWithoutUtilisateurInput | fait_parUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: fait_parCreateManyUtilisateurInputEnvelope
    set?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    disconnect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    delete?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    connect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    update?: fait_parUpdateWithWhereUniqueWithoutUtilisateurInput | fait_parUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: fait_parUpdateManyWithWhereWithoutUtilisateurInput | fait_parUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: fait_parScalarWhereInput | fait_parScalarWhereInput[]
  }

  export type cocherUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<cocherCreateWithoutUtilisateurInput, cocherUncheckedCreateWithoutUtilisateurInput> | cocherCreateWithoutUtilisateurInput[] | cocherUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: cocherCreateOrConnectWithoutUtilisateurInput | cocherCreateOrConnectWithoutUtilisateurInput[]
    upsert?: cocherUpsertWithWhereUniqueWithoutUtilisateurInput | cocherUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: cocherCreateManyUtilisateurInputEnvelope
    set?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    disconnect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    delete?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    connect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    update?: cocherUpdateWithWhereUniqueWithoutUtilisateurInput | cocherUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: cocherUpdateManyWithWhereWithoutUtilisateurInput | cocherUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: cocherScalarWhereInput | cocherScalarWhereInput[]
  }

  export type CommentaireCreateNestedManyWithoutDestinationInput = {
    create?: XOR<CommentaireCreateWithoutDestinationInput, CommentaireUncheckedCreateWithoutDestinationInput> | CommentaireCreateWithoutDestinationInput[] | CommentaireUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutDestinationInput | CommentaireCreateOrConnectWithoutDestinationInput[]
    createMany?: CommentaireCreateManyDestinationInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type ActiviteCreateNestedManyWithoutDestinationInput = {
    create?: XOR<ActiviteCreateWithoutDestinationInput, ActiviteUncheckedCreateWithoutDestinationInput> | ActiviteCreateWithoutDestinationInput[] | ActiviteUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ActiviteCreateOrConnectWithoutDestinationInput | ActiviteCreateOrConnectWithoutDestinationInput[]
    createMany?: ActiviteCreateManyDestinationInputEnvelope
    connect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
  }

  export type fait_parCreateNestedManyWithoutDestinationInput = {
    create?: XOR<fait_parCreateWithoutDestinationInput, fait_parUncheckedCreateWithoutDestinationInput> | fait_parCreateWithoutDestinationInput[] | fait_parUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: fait_parCreateOrConnectWithoutDestinationInput | fait_parCreateOrConnectWithoutDestinationInput[]
    createMany?: fait_parCreateManyDestinationInputEnvelope
    connect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
  }

  export type contientCreateNestedManyWithoutDestinationInput = {
    create?: XOR<contientCreateWithoutDestinationInput, contientUncheckedCreateWithoutDestinationInput> | contientCreateWithoutDestinationInput[] | contientUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: contientCreateOrConnectWithoutDestinationInput | contientCreateOrConnectWithoutDestinationInput[]
    createMany?: contientCreateManyDestinationInputEnvelope
    connect?: contientWhereUniqueInput | contientWhereUniqueInput[]
  }

  export type requiertCreateNestedManyWithoutDestinationInput = {
    create?: XOR<requiertCreateWithoutDestinationInput, requiertUncheckedCreateWithoutDestinationInput> | requiertCreateWithoutDestinationInput[] | requiertUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: requiertCreateOrConnectWithoutDestinationInput | requiertCreateOrConnectWithoutDestinationInput[]
    createMany?: requiertCreateManyDestinationInputEnvelope
    connect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<CommentaireCreateWithoutDestinationInput, CommentaireUncheckedCreateWithoutDestinationInput> | CommentaireCreateWithoutDestinationInput[] | CommentaireUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutDestinationInput | CommentaireCreateOrConnectWithoutDestinationInput[]
    createMany?: CommentaireCreateManyDestinationInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type ActiviteUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<ActiviteCreateWithoutDestinationInput, ActiviteUncheckedCreateWithoutDestinationInput> | ActiviteCreateWithoutDestinationInput[] | ActiviteUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ActiviteCreateOrConnectWithoutDestinationInput | ActiviteCreateOrConnectWithoutDestinationInput[]
    createMany?: ActiviteCreateManyDestinationInputEnvelope
    connect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
  }

  export type fait_parUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<fait_parCreateWithoutDestinationInput, fait_parUncheckedCreateWithoutDestinationInput> | fait_parCreateWithoutDestinationInput[] | fait_parUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: fait_parCreateOrConnectWithoutDestinationInput | fait_parCreateOrConnectWithoutDestinationInput[]
    createMany?: fait_parCreateManyDestinationInputEnvelope
    connect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
  }

  export type contientUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<contientCreateWithoutDestinationInput, contientUncheckedCreateWithoutDestinationInput> | contientCreateWithoutDestinationInput[] | contientUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: contientCreateOrConnectWithoutDestinationInput | contientCreateOrConnectWithoutDestinationInput[]
    createMany?: contientCreateManyDestinationInputEnvelope
    connect?: contientWhereUniqueInput | contientWhereUniqueInput[]
  }

  export type requiertUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<requiertCreateWithoutDestinationInput, requiertUncheckedCreateWithoutDestinationInput> | requiertCreateWithoutDestinationInput[] | requiertUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: requiertCreateOrConnectWithoutDestinationInput | requiertCreateOrConnectWithoutDestinationInput[]
    createMany?: requiertCreateManyDestinationInputEnvelope
    connect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CommentaireUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<CommentaireCreateWithoutDestinationInput, CommentaireUncheckedCreateWithoutDestinationInput> | CommentaireCreateWithoutDestinationInput[] | CommentaireUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutDestinationInput | CommentaireCreateOrConnectWithoutDestinationInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutDestinationInput | CommentaireUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: CommentaireCreateManyDestinationInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutDestinationInput | CommentaireUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutDestinationInput | CommentaireUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type ActiviteUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<ActiviteCreateWithoutDestinationInput, ActiviteUncheckedCreateWithoutDestinationInput> | ActiviteCreateWithoutDestinationInput[] | ActiviteUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ActiviteCreateOrConnectWithoutDestinationInput | ActiviteCreateOrConnectWithoutDestinationInput[]
    upsert?: ActiviteUpsertWithWhereUniqueWithoutDestinationInput | ActiviteUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: ActiviteCreateManyDestinationInputEnvelope
    set?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    disconnect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    delete?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    connect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    update?: ActiviteUpdateWithWhereUniqueWithoutDestinationInput | ActiviteUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: ActiviteUpdateManyWithWhereWithoutDestinationInput | ActiviteUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: ActiviteScalarWhereInput | ActiviteScalarWhereInput[]
  }

  export type fait_parUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<fait_parCreateWithoutDestinationInput, fait_parUncheckedCreateWithoutDestinationInput> | fait_parCreateWithoutDestinationInput[] | fait_parUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: fait_parCreateOrConnectWithoutDestinationInput | fait_parCreateOrConnectWithoutDestinationInput[]
    upsert?: fait_parUpsertWithWhereUniqueWithoutDestinationInput | fait_parUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: fait_parCreateManyDestinationInputEnvelope
    set?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    disconnect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    delete?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    connect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    update?: fait_parUpdateWithWhereUniqueWithoutDestinationInput | fait_parUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: fait_parUpdateManyWithWhereWithoutDestinationInput | fait_parUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: fait_parScalarWhereInput | fait_parScalarWhereInput[]
  }

  export type contientUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<contientCreateWithoutDestinationInput, contientUncheckedCreateWithoutDestinationInput> | contientCreateWithoutDestinationInput[] | contientUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: contientCreateOrConnectWithoutDestinationInput | contientCreateOrConnectWithoutDestinationInput[]
    upsert?: contientUpsertWithWhereUniqueWithoutDestinationInput | contientUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: contientCreateManyDestinationInputEnvelope
    set?: contientWhereUniqueInput | contientWhereUniqueInput[]
    disconnect?: contientWhereUniqueInput | contientWhereUniqueInput[]
    delete?: contientWhereUniqueInput | contientWhereUniqueInput[]
    connect?: contientWhereUniqueInput | contientWhereUniqueInput[]
    update?: contientUpdateWithWhereUniqueWithoutDestinationInput | contientUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: contientUpdateManyWithWhereWithoutDestinationInput | contientUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: contientScalarWhereInput | contientScalarWhereInput[]
  }

  export type requiertUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<requiertCreateWithoutDestinationInput, requiertUncheckedCreateWithoutDestinationInput> | requiertCreateWithoutDestinationInput[] | requiertUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: requiertCreateOrConnectWithoutDestinationInput | requiertCreateOrConnectWithoutDestinationInput[]
    upsert?: requiertUpsertWithWhereUniqueWithoutDestinationInput | requiertUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: requiertCreateManyDestinationInputEnvelope
    set?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    disconnect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    delete?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    connect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    update?: requiertUpdateWithWhereUniqueWithoutDestinationInput | requiertUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: requiertUpdateManyWithWhereWithoutDestinationInput | requiertUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: requiertScalarWhereInput | requiertScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<CommentaireCreateWithoutDestinationInput, CommentaireUncheckedCreateWithoutDestinationInput> | CommentaireCreateWithoutDestinationInput[] | CommentaireUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutDestinationInput | CommentaireCreateOrConnectWithoutDestinationInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutDestinationInput | CommentaireUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: CommentaireCreateManyDestinationInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutDestinationInput | CommentaireUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutDestinationInput | CommentaireUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type ActiviteUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<ActiviteCreateWithoutDestinationInput, ActiviteUncheckedCreateWithoutDestinationInput> | ActiviteCreateWithoutDestinationInput[] | ActiviteUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ActiviteCreateOrConnectWithoutDestinationInput | ActiviteCreateOrConnectWithoutDestinationInput[]
    upsert?: ActiviteUpsertWithWhereUniqueWithoutDestinationInput | ActiviteUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: ActiviteCreateManyDestinationInputEnvelope
    set?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    disconnect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    delete?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    connect?: ActiviteWhereUniqueInput | ActiviteWhereUniqueInput[]
    update?: ActiviteUpdateWithWhereUniqueWithoutDestinationInput | ActiviteUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: ActiviteUpdateManyWithWhereWithoutDestinationInput | ActiviteUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: ActiviteScalarWhereInput | ActiviteScalarWhereInput[]
  }

  export type fait_parUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<fait_parCreateWithoutDestinationInput, fait_parUncheckedCreateWithoutDestinationInput> | fait_parCreateWithoutDestinationInput[] | fait_parUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: fait_parCreateOrConnectWithoutDestinationInput | fait_parCreateOrConnectWithoutDestinationInput[]
    upsert?: fait_parUpsertWithWhereUniqueWithoutDestinationInput | fait_parUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: fait_parCreateManyDestinationInputEnvelope
    set?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    disconnect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    delete?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    connect?: fait_parWhereUniqueInput | fait_parWhereUniqueInput[]
    update?: fait_parUpdateWithWhereUniqueWithoutDestinationInput | fait_parUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: fait_parUpdateManyWithWhereWithoutDestinationInput | fait_parUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: fait_parScalarWhereInput | fait_parScalarWhereInput[]
  }

  export type contientUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<contientCreateWithoutDestinationInput, contientUncheckedCreateWithoutDestinationInput> | contientCreateWithoutDestinationInput[] | contientUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: contientCreateOrConnectWithoutDestinationInput | contientCreateOrConnectWithoutDestinationInput[]
    upsert?: contientUpsertWithWhereUniqueWithoutDestinationInput | contientUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: contientCreateManyDestinationInputEnvelope
    set?: contientWhereUniqueInput | contientWhereUniqueInput[]
    disconnect?: contientWhereUniqueInput | contientWhereUniqueInput[]
    delete?: contientWhereUniqueInput | contientWhereUniqueInput[]
    connect?: contientWhereUniqueInput | contientWhereUniqueInput[]
    update?: contientUpdateWithWhereUniqueWithoutDestinationInput | contientUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: contientUpdateManyWithWhereWithoutDestinationInput | contientUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: contientScalarWhereInput | contientScalarWhereInput[]
  }

  export type requiertUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<requiertCreateWithoutDestinationInput, requiertUncheckedCreateWithoutDestinationInput> | requiertCreateWithoutDestinationInput[] | requiertUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: requiertCreateOrConnectWithoutDestinationInput | requiertCreateOrConnectWithoutDestinationInput[]
    upsert?: requiertUpsertWithWhereUniqueWithoutDestinationInput | requiertUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: requiertCreateManyDestinationInputEnvelope
    set?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    disconnect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    delete?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    connect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    update?: requiertUpdateWithWhereUniqueWithoutDestinationInput | requiertUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: requiertUpdateManyWithWhereWithoutDestinationInput | requiertUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: requiertScalarWhereInput | requiertScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<UtilisateurCreateWithoutCommentairesInput, UtilisateurUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommentairesInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type DestinationCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<DestinationCreateWithoutCommentairesInput, DestinationUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutCommentairesInput
    connect?: DestinationWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UtilisateurUpdateOneRequiredWithoutCommentairesNestedInput = {
    create?: XOR<UtilisateurCreateWithoutCommentairesInput, UtilisateurUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCommentairesInput
    upsert?: UtilisateurUpsertWithoutCommentairesInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutCommentairesInput, UtilisateurUpdateWithoutCommentairesInput>, UtilisateurUncheckedUpdateWithoutCommentairesInput>
  }

  export type DestinationUpdateOneRequiredWithoutCommentairesNestedInput = {
    create?: XOR<DestinationCreateWithoutCommentairesInput, DestinationUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutCommentairesInput
    upsert?: DestinationUpsertWithoutCommentairesInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutCommentairesInput, DestinationUpdateWithoutCommentairesInput>, DestinationUncheckedUpdateWithoutCommentairesInput>
  }

  export type DestinationCreateNestedOneWithoutActivitesInput = {
    create?: XOR<DestinationCreateWithoutActivitesInput, DestinationUncheckedCreateWithoutActivitesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutActivitesInput
    connect?: DestinationWhereUniqueInput
  }

  export type DestinationUpdateOneRequiredWithoutActivitesNestedInput = {
    create?: XOR<DestinationCreateWithoutActivitesInput, DestinationUncheckedCreateWithoutActivitesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutActivitesInput
    upsert?: DestinationUpsertWithoutActivitesInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutActivitesInput, DestinationUpdateWithoutActivitesInput>, DestinationUncheckedUpdateWithoutActivitesInput>
  }

  export type contientCreateNestedManyWithoutChecklist_itemInput = {
    create?: XOR<contientCreateWithoutChecklist_itemInput, contientUncheckedCreateWithoutChecklist_itemInput> | contientCreateWithoutChecklist_itemInput[] | contientUncheckedCreateWithoutChecklist_itemInput[]
    connectOrCreate?: contientCreateOrConnectWithoutChecklist_itemInput | contientCreateOrConnectWithoutChecklist_itemInput[]
    createMany?: contientCreateManyChecklist_itemInputEnvelope
    connect?: contientWhereUniqueInput | contientWhereUniqueInput[]
  }

  export type cocherCreateNestedManyWithoutChecklist_itemInput = {
    create?: XOR<cocherCreateWithoutChecklist_itemInput, cocherUncheckedCreateWithoutChecklist_itemInput> | cocherCreateWithoutChecklist_itemInput[] | cocherUncheckedCreateWithoutChecklist_itemInput[]
    connectOrCreate?: cocherCreateOrConnectWithoutChecklist_itemInput | cocherCreateOrConnectWithoutChecklist_itemInput[]
    createMany?: cocherCreateManyChecklist_itemInputEnvelope
    connect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
  }

  export type contientUncheckedCreateNestedManyWithoutChecklist_itemInput = {
    create?: XOR<contientCreateWithoutChecklist_itemInput, contientUncheckedCreateWithoutChecklist_itemInput> | contientCreateWithoutChecklist_itemInput[] | contientUncheckedCreateWithoutChecklist_itemInput[]
    connectOrCreate?: contientCreateOrConnectWithoutChecklist_itemInput | contientCreateOrConnectWithoutChecklist_itemInput[]
    createMany?: contientCreateManyChecklist_itemInputEnvelope
    connect?: contientWhereUniqueInput | contientWhereUniqueInput[]
  }

  export type cocherUncheckedCreateNestedManyWithoutChecklist_itemInput = {
    create?: XOR<cocherCreateWithoutChecklist_itemInput, cocherUncheckedCreateWithoutChecklist_itemInput> | cocherCreateWithoutChecklist_itemInput[] | cocherUncheckedCreateWithoutChecklist_itemInput[]
    connectOrCreate?: cocherCreateOrConnectWithoutChecklist_itemInput | cocherCreateOrConnectWithoutChecklist_itemInput[]
    createMany?: cocherCreateManyChecklist_itemInputEnvelope
    connect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
  }

  export type contientUpdateManyWithoutChecklist_itemNestedInput = {
    create?: XOR<contientCreateWithoutChecklist_itemInput, contientUncheckedCreateWithoutChecklist_itemInput> | contientCreateWithoutChecklist_itemInput[] | contientUncheckedCreateWithoutChecklist_itemInput[]
    connectOrCreate?: contientCreateOrConnectWithoutChecklist_itemInput | contientCreateOrConnectWithoutChecklist_itemInput[]
    upsert?: contientUpsertWithWhereUniqueWithoutChecklist_itemInput | contientUpsertWithWhereUniqueWithoutChecklist_itemInput[]
    createMany?: contientCreateManyChecklist_itemInputEnvelope
    set?: contientWhereUniqueInput | contientWhereUniqueInput[]
    disconnect?: contientWhereUniqueInput | contientWhereUniqueInput[]
    delete?: contientWhereUniqueInput | contientWhereUniqueInput[]
    connect?: contientWhereUniqueInput | contientWhereUniqueInput[]
    update?: contientUpdateWithWhereUniqueWithoutChecklist_itemInput | contientUpdateWithWhereUniqueWithoutChecklist_itemInput[]
    updateMany?: contientUpdateManyWithWhereWithoutChecklist_itemInput | contientUpdateManyWithWhereWithoutChecklist_itemInput[]
    deleteMany?: contientScalarWhereInput | contientScalarWhereInput[]
  }

  export type cocherUpdateManyWithoutChecklist_itemNestedInput = {
    create?: XOR<cocherCreateWithoutChecklist_itemInput, cocherUncheckedCreateWithoutChecklist_itemInput> | cocherCreateWithoutChecklist_itemInput[] | cocherUncheckedCreateWithoutChecklist_itemInput[]
    connectOrCreate?: cocherCreateOrConnectWithoutChecklist_itemInput | cocherCreateOrConnectWithoutChecklist_itemInput[]
    upsert?: cocherUpsertWithWhereUniqueWithoutChecklist_itemInput | cocherUpsertWithWhereUniqueWithoutChecklist_itemInput[]
    createMany?: cocherCreateManyChecklist_itemInputEnvelope
    set?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    disconnect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    delete?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    connect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    update?: cocherUpdateWithWhereUniqueWithoutChecklist_itemInput | cocherUpdateWithWhereUniqueWithoutChecklist_itemInput[]
    updateMany?: cocherUpdateManyWithWhereWithoutChecklist_itemInput | cocherUpdateManyWithWhereWithoutChecklist_itemInput[]
    deleteMany?: cocherScalarWhereInput | cocherScalarWhereInput[]
  }

  export type contientUncheckedUpdateManyWithoutChecklist_itemNestedInput = {
    create?: XOR<contientCreateWithoutChecklist_itemInput, contientUncheckedCreateWithoutChecklist_itemInput> | contientCreateWithoutChecklist_itemInput[] | contientUncheckedCreateWithoutChecklist_itemInput[]
    connectOrCreate?: contientCreateOrConnectWithoutChecklist_itemInput | contientCreateOrConnectWithoutChecklist_itemInput[]
    upsert?: contientUpsertWithWhereUniqueWithoutChecklist_itemInput | contientUpsertWithWhereUniqueWithoutChecklist_itemInput[]
    createMany?: contientCreateManyChecklist_itemInputEnvelope
    set?: contientWhereUniqueInput | contientWhereUniqueInput[]
    disconnect?: contientWhereUniqueInput | contientWhereUniqueInput[]
    delete?: contientWhereUniqueInput | contientWhereUniqueInput[]
    connect?: contientWhereUniqueInput | contientWhereUniqueInput[]
    update?: contientUpdateWithWhereUniqueWithoutChecklist_itemInput | contientUpdateWithWhereUniqueWithoutChecklist_itemInput[]
    updateMany?: contientUpdateManyWithWhereWithoutChecklist_itemInput | contientUpdateManyWithWhereWithoutChecklist_itemInput[]
    deleteMany?: contientScalarWhereInput | contientScalarWhereInput[]
  }

  export type cocherUncheckedUpdateManyWithoutChecklist_itemNestedInput = {
    create?: XOR<cocherCreateWithoutChecklist_itemInput, cocherUncheckedCreateWithoutChecklist_itemInput> | cocherCreateWithoutChecklist_itemInput[] | cocherUncheckedCreateWithoutChecklist_itemInput[]
    connectOrCreate?: cocherCreateOrConnectWithoutChecklist_itemInput | cocherCreateOrConnectWithoutChecklist_itemInput[]
    upsert?: cocherUpsertWithWhereUniqueWithoutChecklist_itemInput | cocherUpsertWithWhereUniqueWithoutChecklist_itemInput[]
    createMany?: cocherCreateManyChecklist_itemInputEnvelope
    set?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    disconnect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    delete?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    connect?: cocherWhereUniqueInput | cocherWhereUniqueInput[]
    update?: cocherUpdateWithWhereUniqueWithoutChecklist_itemInput | cocherUpdateWithWhereUniqueWithoutChecklist_itemInput[]
    updateMany?: cocherUpdateManyWithWhereWithoutChecklist_itemInput | cocherUpdateManyWithWhereWithoutChecklist_itemInput[]
    deleteMany?: cocherScalarWhereInput | cocherScalarWhereInput[]
  }

  export type requiertCreateNestedManyWithoutFormaliteInput = {
    create?: XOR<requiertCreateWithoutFormaliteInput, requiertUncheckedCreateWithoutFormaliteInput> | requiertCreateWithoutFormaliteInput[] | requiertUncheckedCreateWithoutFormaliteInput[]
    connectOrCreate?: requiertCreateOrConnectWithoutFormaliteInput | requiertCreateOrConnectWithoutFormaliteInput[]
    createMany?: requiertCreateManyFormaliteInputEnvelope
    connect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
  }

  export type requiertUncheckedCreateNestedManyWithoutFormaliteInput = {
    create?: XOR<requiertCreateWithoutFormaliteInput, requiertUncheckedCreateWithoutFormaliteInput> | requiertCreateWithoutFormaliteInput[] | requiertUncheckedCreateWithoutFormaliteInput[]
    connectOrCreate?: requiertCreateOrConnectWithoutFormaliteInput | requiertCreateOrConnectWithoutFormaliteInput[]
    createMany?: requiertCreateManyFormaliteInputEnvelope
    connect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
  }

  export type requiertUpdateManyWithoutFormaliteNestedInput = {
    create?: XOR<requiertCreateWithoutFormaliteInput, requiertUncheckedCreateWithoutFormaliteInput> | requiertCreateWithoutFormaliteInput[] | requiertUncheckedCreateWithoutFormaliteInput[]
    connectOrCreate?: requiertCreateOrConnectWithoutFormaliteInput | requiertCreateOrConnectWithoutFormaliteInput[]
    upsert?: requiertUpsertWithWhereUniqueWithoutFormaliteInput | requiertUpsertWithWhereUniqueWithoutFormaliteInput[]
    createMany?: requiertCreateManyFormaliteInputEnvelope
    set?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    disconnect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    delete?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    connect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    update?: requiertUpdateWithWhereUniqueWithoutFormaliteInput | requiertUpdateWithWhereUniqueWithoutFormaliteInput[]
    updateMany?: requiertUpdateManyWithWhereWithoutFormaliteInput | requiertUpdateManyWithWhereWithoutFormaliteInput[]
    deleteMany?: requiertScalarWhereInput | requiertScalarWhereInput[]
  }

  export type requiertUncheckedUpdateManyWithoutFormaliteNestedInput = {
    create?: XOR<requiertCreateWithoutFormaliteInput, requiertUncheckedCreateWithoutFormaliteInput> | requiertCreateWithoutFormaliteInput[] | requiertUncheckedCreateWithoutFormaliteInput[]
    connectOrCreate?: requiertCreateOrConnectWithoutFormaliteInput | requiertCreateOrConnectWithoutFormaliteInput[]
    upsert?: requiertUpsertWithWhereUniqueWithoutFormaliteInput | requiertUpsertWithWhereUniqueWithoutFormaliteInput[]
    createMany?: requiertCreateManyFormaliteInputEnvelope
    set?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    disconnect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    delete?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    connect?: requiertWhereUniqueInput | requiertWhereUniqueInput[]
    update?: requiertUpdateWithWhereUniqueWithoutFormaliteInput | requiertUpdateWithWhereUniqueWithoutFormaliteInput[]
    updateMany?: requiertUpdateManyWithWhereWithoutFormaliteInput | requiertUpdateManyWithWhereWithoutFormaliteInput[]
    deleteMany?: requiertScalarWhereInput | requiertScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutDestinationsInput = {
    create?: XOR<UtilisateurCreateWithoutDestinationsInput, UtilisateurUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDestinationsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type DestinationCreateNestedOneWithoutUtilisateursInput = {
    create?: XOR<DestinationCreateWithoutUtilisateursInput, DestinationUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutUtilisateursInput
    connect?: DestinationWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutDestinationsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutDestinationsInput, UtilisateurUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutDestinationsInput
    upsert?: UtilisateurUpsertWithoutDestinationsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutDestinationsInput, UtilisateurUpdateWithoutDestinationsInput>, UtilisateurUncheckedUpdateWithoutDestinationsInput>
  }

  export type DestinationUpdateOneRequiredWithoutUtilisateursNestedInput = {
    create?: XOR<DestinationCreateWithoutUtilisateursInput, DestinationUncheckedCreateWithoutUtilisateursInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutUtilisateursInput
    upsert?: DestinationUpsertWithoutUtilisateursInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutUtilisateursInput, DestinationUpdateWithoutUtilisateursInput>, DestinationUncheckedUpdateWithoutUtilisateursInput>
  }

  export type DestinationCreateNestedOneWithoutChecklist_itemsInput = {
    create?: XOR<DestinationCreateWithoutChecklist_itemsInput, DestinationUncheckedCreateWithoutChecklist_itemsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutChecklist_itemsInput
    connect?: DestinationWhereUniqueInput
  }

  export type CheckListe_ItemCreateNestedOneWithoutDestinationsInput = {
    create?: XOR<CheckListe_ItemCreateWithoutDestinationsInput, CheckListe_ItemUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: CheckListe_ItemCreateOrConnectWithoutDestinationsInput
    connect?: CheckListe_ItemWhereUniqueInput
  }

  export type DestinationUpdateOneRequiredWithoutChecklist_itemsNestedInput = {
    create?: XOR<DestinationCreateWithoutChecklist_itemsInput, DestinationUncheckedCreateWithoutChecklist_itemsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutChecklist_itemsInput
    upsert?: DestinationUpsertWithoutChecklist_itemsInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutChecklist_itemsInput, DestinationUpdateWithoutChecklist_itemsInput>, DestinationUncheckedUpdateWithoutChecklist_itemsInput>
  }

  export type CheckListe_ItemUpdateOneRequiredWithoutDestinationsNestedInput = {
    create?: XOR<CheckListe_ItemCreateWithoutDestinationsInput, CheckListe_ItemUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: CheckListe_ItemCreateOrConnectWithoutDestinationsInput
    upsert?: CheckListe_ItemUpsertWithoutDestinationsInput
    connect?: CheckListe_ItemWhereUniqueInput
    update?: XOR<XOR<CheckListe_ItemUpdateToOneWithWhereWithoutDestinationsInput, CheckListe_ItemUpdateWithoutDestinationsInput>, CheckListe_ItemUncheckedUpdateWithoutDestinationsInput>
  }

  export type DestinationCreateNestedOneWithoutFormalitesInput = {
    create?: XOR<DestinationCreateWithoutFormalitesInput, DestinationUncheckedCreateWithoutFormalitesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutFormalitesInput
    connect?: DestinationWhereUniqueInput
  }

  export type Formalite_administrative_ItemCreateNestedOneWithoutDestinationsInput = {
    create?: XOR<Formalite_administrative_ItemCreateWithoutDestinationsInput, Formalite_administrative_ItemUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: Formalite_administrative_ItemCreateOrConnectWithoutDestinationsInput
    connect?: Formalite_administrative_ItemWhereUniqueInput
  }

  export type DestinationUpdateOneRequiredWithoutFormalitesNestedInput = {
    create?: XOR<DestinationCreateWithoutFormalitesInput, DestinationUncheckedCreateWithoutFormalitesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutFormalitesInput
    upsert?: DestinationUpsertWithoutFormalitesInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutFormalitesInput, DestinationUpdateWithoutFormalitesInput>, DestinationUncheckedUpdateWithoutFormalitesInput>
  }

  export type Formalite_administrative_ItemUpdateOneRequiredWithoutDestinationsNestedInput = {
    create?: XOR<Formalite_administrative_ItemCreateWithoutDestinationsInput, Formalite_administrative_ItemUncheckedCreateWithoutDestinationsInput>
    connectOrCreate?: Formalite_administrative_ItemCreateOrConnectWithoutDestinationsInput
    upsert?: Formalite_administrative_ItemUpsertWithoutDestinationsInput
    connect?: Formalite_administrative_ItemWhereUniqueInput
    update?: XOR<XOR<Formalite_administrative_ItemUpdateToOneWithWhereWithoutDestinationsInput, Formalite_administrative_ItemUpdateWithoutDestinationsInput>, Formalite_administrative_ItemUncheckedUpdateWithoutDestinationsInput>
  }

  export type UtilisateurCreateNestedOneWithoutCoche_itemsInput = {
    create?: XOR<UtilisateurCreateWithoutCoche_itemsInput, UtilisateurUncheckedCreateWithoutCoche_itemsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCoche_itemsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type CheckListe_ItemCreateNestedOneWithoutCoche_utilisateursInput = {
    create?: XOR<CheckListe_ItemCreateWithoutCoche_utilisateursInput, CheckListe_ItemUncheckedCreateWithoutCoche_utilisateursInput>
    connectOrCreate?: CheckListe_ItemCreateOrConnectWithoutCoche_utilisateursInput
    connect?: CheckListe_ItemWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutCoche_itemsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutCoche_itemsInput, UtilisateurUncheckedCreateWithoutCoche_itemsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutCoche_itemsInput
    upsert?: UtilisateurUpsertWithoutCoche_itemsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutCoche_itemsInput, UtilisateurUpdateWithoutCoche_itemsInput>, UtilisateurUncheckedUpdateWithoutCoche_itemsInput>
  }

  export type CheckListe_ItemUpdateOneRequiredWithoutCoche_utilisateursNestedInput = {
    create?: XOR<CheckListe_ItemCreateWithoutCoche_utilisateursInput, CheckListe_ItemUncheckedCreateWithoutCoche_utilisateursInput>
    connectOrCreate?: CheckListe_ItemCreateOrConnectWithoutCoche_utilisateursInput
    upsert?: CheckListe_ItemUpsertWithoutCoche_utilisateursInput
    connect?: CheckListe_ItemWhereUniqueInput
    update?: XOR<XOR<CheckListe_ItemUpdateToOneWithWhereWithoutCoche_utilisateursInput, CheckListe_ItemUpdateWithoutCoche_utilisateursInput>, CheckListe_ItemUncheckedUpdateWithoutCoche_utilisateursInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CommentaireCreateWithoutUtilisateurInput = {
    note: number
    contenu: string
    date_commentaire: Date | string
    image_commentaire?: string | null
    destination: DestinationCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateWithoutUtilisateurInput = {
    id_commentaire?: number
    note: number
    contenu: string
    date_commentaire: Date | string
    image_commentaire?: string | null
    destinationId: number
  }

  export type CommentaireCreateOrConnectWithoutUtilisateurInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput>
  }

  export type CommentaireCreateManyUtilisateurInputEnvelope = {
    data: CommentaireCreateManyUtilisateurInput | CommentaireCreateManyUtilisateurInput[]
  }

  export type fait_parCreateWithoutUtilisateurInput = {
    destination: DestinationCreateNestedOneWithoutUtilisateursInput
  }

  export type fait_parUncheckedCreateWithoutUtilisateurInput = {
    destinationId: number
  }

  export type fait_parCreateOrConnectWithoutUtilisateurInput = {
    where: fait_parWhereUniqueInput
    create: XOR<fait_parCreateWithoutUtilisateurInput, fait_parUncheckedCreateWithoutUtilisateurInput>
  }

  export type fait_parCreateManyUtilisateurInputEnvelope = {
    data: fait_parCreateManyUtilisateurInput | fait_parCreateManyUtilisateurInput[]
  }

  export type cocherCreateWithoutUtilisateurInput = {
    date_cocher: Date | string
    checklist_item: CheckListe_ItemCreateNestedOneWithoutCoche_utilisateursInput
  }

  export type cocherUncheckedCreateWithoutUtilisateurInput = {
    checklistItemId: number
    date_cocher: Date | string
  }

  export type cocherCreateOrConnectWithoutUtilisateurInput = {
    where: cocherWhereUniqueInput
    create: XOR<cocherCreateWithoutUtilisateurInput, cocherUncheckedCreateWithoutUtilisateurInput>
  }

  export type cocherCreateManyUtilisateurInputEnvelope = {
    data: cocherCreateManyUtilisateurInput | cocherCreateManyUtilisateurInput[]
  }

  export type CommentaireUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutUtilisateurInput, CommentaireUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<CommentaireCreateWithoutUtilisateurInput, CommentaireUncheckedCreateWithoutUtilisateurInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutUtilisateurInput, CommentaireUncheckedUpdateWithoutUtilisateurInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutUtilisateurInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type CommentaireScalarWhereInput = {
    AND?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    OR?: CommentaireScalarWhereInput[]
    NOT?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    id_commentaire?: IntFilter<"Commentaire"> | number
    note?: IntFilter<"Commentaire"> | number
    contenu?: StringFilter<"Commentaire"> | string
    date_commentaire?: DateTimeFilter<"Commentaire"> | Date | string
    image_commentaire?: StringNullableFilter<"Commentaire"> | string | null
    utilisateurId?: IntFilter<"Commentaire"> | number
    destinationId?: IntFilter<"Commentaire"> | number
  }

  export type fait_parUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: fait_parWhereUniqueInput
    update: XOR<fait_parUpdateWithoutUtilisateurInput, fait_parUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<fait_parCreateWithoutUtilisateurInput, fait_parUncheckedCreateWithoutUtilisateurInput>
  }

  export type fait_parUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: fait_parWhereUniqueInput
    data: XOR<fait_parUpdateWithoutUtilisateurInput, fait_parUncheckedUpdateWithoutUtilisateurInput>
  }

  export type fait_parUpdateManyWithWhereWithoutUtilisateurInput = {
    where: fait_parScalarWhereInput
    data: XOR<fait_parUpdateManyMutationInput, fait_parUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type fait_parScalarWhereInput = {
    AND?: fait_parScalarWhereInput | fait_parScalarWhereInput[]
    OR?: fait_parScalarWhereInput[]
    NOT?: fait_parScalarWhereInput | fait_parScalarWhereInput[]
    utilisateurId?: IntFilter<"fait_par"> | number
    destinationId?: IntFilter<"fait_par"> | number
  }

  export type cocherUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: cocherWhereUniqueInput
    update: XOR<cocherUpdateWithoutUtilisateurInput, cocherUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<cocherCreateWithoutUtilisateurInput, cocherUncheckedCreateWithoutUtilisateurInput>
  }

  export type cocherUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: cocherWhereUniqueInput
    data: XOR<cocherUpdateWithoutUtilisateurInput, cocherUncheckedUpdateWithoutUtilisateurInput>
  }

  export type cocherUpdateManyWithWhereWithoutUtilisateurInput = {
    where: cocherScalarWhereInput
    data: XOR<cocherUpdateManyMutationInput, cocherUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type cocherScalarWhereInput = {
    AND?: cocherScalarWhereInput | cocherScalarWhereInput[]
    OR?: cocherScalarWhereInput[]
    NOT?: cocherScalarWhereInput | cocherScalarWhereInput[]
    utilisateurId?: IntFilter<"cocher"> | number
    checklistItemId?: IntFilter<"cocher"> | number
    date_cocher?: DateTimeFilter<"cocher"> | Date | string
  }

  export type CommentaireCreateWithoutDestinationInput = {
    note: number
    contenu: string
    date_commentaire: Date | string
    image_commentaire?: string | null
    utilisateur: UtilisateurCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateWithoutDestinationInput = {
    id_commentaire?: number
    note: number
    contenu: string
    date_commentaire: Date | string
    image_commentaire?: string | null
    utilisateurId: number
  }

  export type CommentaireCreateOrConnectWithoutDestinationInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutDestinationInput, CommentaireUncheckedCreateWithoutDestinationInput>
  }

  export type CommentaireCreateManyDestinationInputEnvelope = {
    data: CommentaireCreateManyDestinationInput | CommentaireCreateManyDestinationInput[]
  }

  export type ActiviteCreateWithoutDestinationInput = {
    nom_activite: string
    description_activite: string
    image_activite?: string | null
  }

  export type ActiviteUncheckedCreateWithoutDestinationInput = {
    id_activite?: number
    nom_activite: string
    description_activite: string
    image_activite?: string | null
  }

  export type ActiviteCreateOrConnectWithoutDestinationInput = {
    where: ActiviteWhereUniqueInput
    create: XOR<ActiviteCreateWithoutDestinationInput, ActiviteUncheckedCreateWithoutDestinationInput>
  }

  export type ActiviteCreateManyDestinationInputEnvelope = {
    data: ActiviteCreateManyDestinationInput | ActiviteCreateManyDestinationInput[]
  }

  export type fait_parCreateWithoutDestinationInput = {
    utilisateur: UtilisateurCreateNestedOneWithoutDestinationsInput
  }

  export type fait_parUncheckedCreateWithoutDestinationInput = {
    utilisateurId: number
  }

  export type fait_parCreateOrConnectWithoutDestinationInput = {
    where: fait_parWhereUniqueInput
    create: XOR<fait_parCreateWithoutDestinationInput, fait_parUncheckedCreateWithoutDestinationInput>
  }

  export type fait_parCreateManyDestinationInputEnvelope = {
    data: fait_parCreateManyDestinationInput | fait_parCreateManyDestinationInput[]
  }

  export type contientCreateWithoutDestinationInput = {
    checklist_item: CheckListe_ItemCreateNestedOneWithoutDestinationsInput
  }

  export type contientUncheckedCreateWithoutDestinationInput = {
    checklistItemId: number
  }

  export type contientCreateOrConnectWithoutDestinationInput = {
    where: contientWhereUniqueInput
    create: XOR<contientCreateWithoutDestinationInput, contientUncheckedCreateWithoutDestinationInput>
  }

  export type contientCreateManyDestinationInputEnvelope = {
    data: contientCreateManyDestinationInput | contientCreateManyDestinationInput[]
  }

  export type requiertCreateWithoutDestinationInput = {
    formalite: Formalite_administrative_ItemCreateNestedOneWithoutDestinationsInput
  }

  export type requiertUncheckedCreateWithoutDestinationInput = {
    formaliteItemId: number
  }

  export type requiertCreateOrConnectWithoutDestinationInput = {
    where: requiertWhereUniqueInput
    create: XOR<requiertCreateWithoutDestinationInput, requiertUncheckedCreateWithoutDestinationInput>
  }

  export type requiertCreateManyDestinationInputEnvelope = {
    data: requiertCreateManyDestinationInput | requiertCreateManyDestinationInput[]
  }

  export type CommentaireUpsertWithWhereUniqueWithoutDestinationInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutDestinationInput, CommentaireUncheckedUpdateWithoutDestinationInput>
    create: XOR<CommentaireCreateWithoutDestinationInput, CommentaireUncheckedCreateWithoutDestinationInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutDestinationInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutDestinationInput, CommentaireUncheckedUpdateWithoutDestinationInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutDestinationInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutDestinationInput>
  }

  export type ActiviteUpsertWithWhereUniqueWithoutDestinationInput = {
    where: ActiviteWhereUniqueInput
    update: XOR<ActiviteUpdateWithoutDestinationInput, ActiviteUncheckedUpdateWithoutDestinationInput>
    create: XOR<ActiviteCreateWithoutDestinationInput, ActiviteUncheckedCreateWithoutDestinationInput>
  }

  export type ActiviteUpdateWithWhereUniqueWithoutDestinationInput = {
    where: ActiviteWhereUniqueInput
    data: XOR<ActiviteUpdateWithoutDestinationInput, ActiviteUncheckedUpdateWithoutDestinationInput>
  }

  export type ActiviteUpdateManyWithWhereWithoutDestinationInput = {
    where: ActiviteScalarWhereInput
    data: XOR<ActiviteUpdateManyMutationInput, ActiviteUncheckedUpdateManyWithoutDestinationInput>
  }

  export type ActiviteScalarWhereInput = {
    AND?: ActiviteScalarWhereInput | ActiviteScalarWhereInput[]
    OR?: ActiviteScalarWhereInput[]
    NOT?: ActiviteScalarWhereInput | ActiviteScalarWhereInput[]
    id_activite?: IntFilter<"Activite"> | number
    nom_activite?: StringFilter<"Activite"> | string
    description_activite?: StringFilter<"Activite"> | string
    image_activite?: StringNullableFilter<"Activite"> | string | null
    destinationId?: IntFilter<"Activite"> | number
  }

  export type fait_parUpsertWithWhereUniqueWithoutDestinationInput = {
    where: fait_parWhereUniqueInput
    update: XOR<fait_parUpdateWithoutDestinationInput, fait_parUncheckedUpdateWithoutDestinationInput>
    create: XOR<fait_parCreateWithoutDestinationInput, fait_parUncheckedCreateWithoutDestinationInput>
  }

  export type fait_parUpdateWithWhereUniqueWithoutDestinationInput = {
    where: fait_parWhereUniqueInput
    data: XOR<fait_parUpdateWithoutDestinationInput, fait_parUncheckedUpdateWithoutDestinationInput>
  }

  export type fait_parUpdateManyWithWhereWithoutDestinationInput = {
    where: fait_parScalarWhereInput
    data: XOR<fait_parUpdateManyMutationInput, fait_parUncheckedUpdateManyWithoutDestinationInput>
  }

  export type contientUpsertWithWhereUniqueWithoutDestinationInput = {
    where: contientWhereUniqueInput
    update: XOR<contientUpdateWithoutDestinationInput, contientUncheckedUpdateWithoutDestinationInput>
    create: XOR<contientCreateWithoutDestinationInput, contientUncheckedCreateWithoutDestinationInput>
  }

  export type contientUpdateWithWhereUniqueWithoutDestinationInput = {
    where: contientWhereUniqueInput
    data: XOR<contientUpdateWithoutDestinationInput, contientUncheckedUpdateWithoutDestinationInput>
  }

  export type contientUpdateManyWithWhereWithoutDestinationInput = {
    where: contientScalarWhereInput
    data: XOR<contientUpdateManyMutationInput, contientUncheckedUpdateManyWithoutDestinationInput>
  }

  export type contientScalarWhereInput = {
    AND?: contientScalarWhereInput | contientScalarWhereInput[]
    OR?: contientScalarWhereInput[]
    NOT?: contientScalarWhereInput | contientScalarWhereInput[]
    destinationId?: IntFilter<"contient"> | number
    checklistItemId?: IntFilter<"contient"> | number
  }

  export type requiertUpsertWithWhereUniqueWithoutDestinationInput = {
    where: requiertWhereUniqueInput
    update: XOR<requiertUpdateWithoutDestinationInput, requiertUncheckedUpdateWithoutDestinationInput>
    create: XOR<requiertCreateWithoutDestinationInput, requiertUncheckedCreateWithoutDestinationInput>
  }

  export type requiertUpdateWithWhereUniqueWithoutDestinationInput = {
    where: requiertWhereUniqueInput
    data: XOR<requiertUpdateWithoutDestinationInput, requiertUncheckedUpdateWithoutDestinationInput>
  }

  export type requiertUpdateManyWithWhereWithoutDestinationInput = {
    where: requiertScalarWhereInput
    data: XOR<requiertUpdateManyMutationInput, requiertUncheckedUpdateManyWithoutDestinationInput>
  }

  export type requiertScalarWhereInput = {
    AND?: requiertScalarWhereInput | requiertScalarWhereInput[]
    OR?: requiertScalarWhereInput[]
    NOT?: requiertScalarWhereInput | requiertScalarWhereInput[]
    destinationId?: IntFilter<"requiert"> | number
    formaliteItemId?: IntFilter<"requiert"> | number
  }

  export type UtilisateurCreateWithoutCommentairesInput = {
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date | string
    tel: string
    destinations?: fait_parCreateNestedManyWithoutUtilisateurInput
    coche_items?: cocherCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutCommentairesInput = {
    id_utilisateur?: number
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date | string
    tel: string
    destinations?: fait_parUncheckedCreateNestedManyWithoutUtilisateurInput
    coche_items?: cocherUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutCommentairesInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutCommentairesInput, UtilisateurUncheckedCreateWithoutCommentairesInput>
  }

  export type DestinationCreateWithoutCommentairesInput = {
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    activites?: ActiviteCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parCreateNestedManyWithoutDestinationInput
    checklist_items?: contientCreateNestedManyWithoutDestinationInput
    formalites?: requiertCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutCommentairesInput = {
    id_destination?: number
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    activites?: ActiviteUncheckedCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parUncheckedCreateNestedManyWithoutDestinationInput
    checklist_items?: contientUncheckedCreateNestedManyWithoutDestinationInput
    formalites?: requiertUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutCommentairesInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutCommentairesInput, DestinationUncheckedCreateWithoutCommentairesInput>
  }

  export type UtilisateurUpsertWithoutCommentairesInput = {
    update: XOR<UtilisateurUpdateWithoutCommentairesInput, UtilisateurUncheckedUpdateWithoutCommentairesInput>
    create: XOR<UtilisateurCreateWithoutCommentairesInput, UtilisateurUncheckedCreateWithoutCommentairesInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutCommentairesInput, UtilisateurUncheckedUpdateWithoutCommentairesInput>
  }

  export type UtilisateurUpdateWithoutCommentairesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
    destinations?: fait_parUpdateManyWithoutUtilisateurNestedInput
    coche_items?: cocherUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutCommentairesInput = {
    id_utilisateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
    destinations?: fait_parUncheckedUpdateManyWithoutUtilisateurNestedInput
    coche_items?: cocherUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type DestinationUpsertWithoutCommentairesInput = {
    update: XOR<DestinationUpdateWithoutCommentairesInput, DestinationUncheckedUpdateWithoutCommentairesInput>
    create: XOR<DestinationCreateWithoutCommentairesInput, DestinationUncheckedCreateWithoutCommentairesInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutCommentairesInput, DestinationUncheckedUpdateWithoutCommentairesInput>
  }

  export type DestinationUpdateWithoutCommentairesInput = {
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    activites?: ActiviteUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutCommentairesInput = {
    id_destination?: IntFieldUpdateOperationsInput | number
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    activites?: ActiviteUncheckedUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUncheckedUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUncheckedUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateWithoutActivitesInput = {
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parCreateNestedManyWithoutDestinationInput
    checklist_items?: contientCreateNestedManyWithoutDestinationInput
    formalites?: requiertCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutActivitesInput = {
    id_destination?: number
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parUncheckedCreateNestedManyWithoutDestinationInput
    checklist_items?: contientUncheckedCreateNestedManyWithoutDestinationInput
    formalites?: requiertUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutActivitesInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutActivitesInput, DestinationUncheckedCreateWithoutActivitesInput>
  }

  export type DestinationUpsertWithoutActivitesInput = {
    update: XOR<DestinationUpdateWithoutActivitesInput, DestinationUncheckedUpdateWithoutActivitesInput>
    create: XOR<DestinationCreateWithoutActivitesInput, DestinationUncheckedCreateWithoutActivitesInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutActivitesInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutActivitesInput, DestinationUncheckedUpdateWithoutActivitesInput>
  }

  export type DestinationUpdateWithoutActivitesInput = {
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutActivitesInput = {
    id_destination?: IntFieldUpdateOperationsInput | number
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUncheckedUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUncheckedUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUncheckedUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type contientCreateWithoutChecklist_itemInput = {
    destination: DestinationCreateNestedOneWithoutChecklist_itemsInput
  }

  export type contientUncheckedCreateWithoutChecklist_itemInput = {
    destinationId: number
  }

  export type contientCreateOrConnectWithoutChecklist_itemInput = {
    where: contientWhereUniqueInput
    create: XOR<contientCreateWithoutChecklist_itemInput, contientUncheckedCreateWithoutChecklist_itemInput>
  }

  export type contientCreateManyChecklist_itemInputEnvelope = {
    data: contientCreateManyChecklist_itemInput | contientCreateManyChecklist_itemInput[]
  }

  export type cocherCreateWithoutChecklist_itemInput = {
    date_cocher: Date | string
    utilisateur: UtilisateurCreateNestedOneWithoutCoche_itemsInput
  }

  export type cocherUncheckedCreateWithoutChecklist_itemInput = {
    utilisateurId: number
    date_cocher: Date | string
  }

  export type cocherCreateOrConnectWithoutChecklist_itemInput = {
    where: cocherWhereUniqueInput
    create: XOR<cocherCreateWithoutChecklist_itemInput, cocherUncheckedCreateWithoutChecklist_itemInput>
  }

  export type cocherCreateManyChecklist_itemInputEnvelope = {
    data: cocherCreateManyChecklist_itemInput | cocherCreateManyChecklist_itemInput[]
  }

  export type contientUpsertWithWhereUniqueWithoutChecklist_itemInput = {
    where: contientWhereUniqueInput
    update: XOR<contientUpdateWithoutChecklist_itemInput, contientUncheckedUpdateWithoutChecklist_itemInput>
    create: XOR<contientCreateWithoutChecklist_itemInput, contientUncheckedCreateWithoutChecklist_itemInput>
  }

  export type contientUpdateWithWhereUniqueWithoutChecklist_itemInput = {
    where: contientWhereUniqueInput
    data: XOR<contientUpdateWithoutChecklist_itemInput, contientUncheckedUpdateWithoutChecklist_itemInput>
  }

  export type contientUpdateManyWithWhereWithoutChecklist_itemInput = {
    where: contientScalarWhereInput
    data: XOR<contientUpdateManyMutationInput, contientUncheckedUpdateManyWithoutChecklist_itemInput>
  }

  export type cocherUpsertWithWhereUniqueWithoutChecklist_itemInput = {
    where: cocherWhereUniqueInput
    update: XOR<cocherUpdateWithoutChecklist_itemInput, cocherUncheckedUpdateWithoutChecklist_itemInput>
    create: XOR<cocherCreateWithoutChecklist_itemInput, cocherUncheckedCreateWithoutChecklist_itemInput>
  }

  export type cocherUpdateWithWhereUniqueWithoutChecklist_itemInput = {
    where: cocherWhereUniqueInput
    data: XOR<cocherUpdateWithoutChecklist_itemInput, cocherUncheckedUpdateWithoutChecklist_itemInput>
  }

  export type cocherUpdateManyWithWhereWithoutChecklist_itemInput = {
    where: cocherScalarWhereInput
    data: XOR<cocherUpdateManyMutationInput, cocherUncheckedUpdateManyWithoutChecklist_itemInput>
  }

  export type requiertCreateWithoutFormaliteInput = {
    destination: DestinationCreateNestedOneWithoutFormalitesInput
  }

  export type requiertUncheckedCreateWithoutFormaliteInput = {
    destinationId: number
  }

  export type requiertCreateOrConnectWithoutFormaliteInput = {
    where: requiertWhereUniqueInput
    create: XOR<requiertCreateWithoutFormaliteInput, requiertUncheckedCreateWithoutFormaliteInput>
  }

  export type requiertCreateManyFormaliteInputEnvelope = {
    data: requiertCreateManyFormaliteInput | requiertCreateManyFormaliteInput[]
  }

  export type requiertUpsertWithWhereUniqueWithoutFormaliteInput = {
    where: requiertWhereUniqueInput
    update: XOR<requiertUpdateWithoutFormaliteInput, requiertUncheckedUpdateWithoutFormaliteInput>
    create: XOR<requiertCreateWithoutFormaliteInput, requiertUncheckedCreateWithoutFormaliteInput>
  }

  export type requiertUpdateWithWhereUniqueWithoutFormaliteInput = {
    where: requiertWhereUniqueInput
    data: XOR<requiertUpdateWithoutFormaliteInput, requiertUncheckedUpdateWithoutFormaliteInput>
  }

  export type requiertUpdateManyWithWhereWithoutFormaliteInput = {
    where: requiertScalarWhereInput
    data: XOR<requiertUpdateManyMutationInput, requiertUncheckedUpdateManyWithoutFormaliteInput>
  }

  export type UtilisateurCreateWithoutDestinationsInput = {
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date | string
    tel: string
    commentaires?: CommentaireCreateNestedManyWithoutUtilisateurInput
    coche_items?: cocherCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutDestinationsInput = {
    id_utilisateur?: number
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date | string
    tel: string
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUtilisateurInput
    coche_items?: cocherUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutDestinationsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutDestinationsInput, UtilisateurUncheckedCreateWithoutDestinationsInput>
  }

  export type DestinationCreateWithoutUtilisateursInput = {
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireCreateNestedManyWithoutDestinationInput
    activites?: ActiviteCreateNestedManyWithoutDestinationInput
    checklist_items?: contientCreateNestedManyWithoutDestinationInput
    formalites?: requiertCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutUtilisateursInput = {
    id_destination?: number
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDestinationInput
    activites?: ActiviteUncheckedCreateNestedManyWithoutDestinationInput
    checklist_items?: contientUncheckedCreateNestedManyWithoutDestinationInput
    formalites?: requiertUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutUtilisateursInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutUtilisateursInput, DestinationUncheckedCreateWithoutUtilisateursInput>
  }

  export type UtilisateurUpsertWithoutDestinationsInput = {
    update: XOR<UtilisateurUpdateWithoutDestinationsInput, UtilisateurUncheckedUpdateWithoutDestinationsInput>
    create: XOR<UtilisateurCreateWithoutDestinationsInput, UtilisateurUncheckedCreateWithoutDestinationsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutDestinationsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutDestinationsInput, UtilisateurUncheckedUpdateWithoutDestinationsInput>
  }

  export type UtilisateurUpdateWithoutDestinationsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUpdateManyWithoutUtilisateurNestedInput
    coche_items?: cocherUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutDestinationsInput = {
    id_utilisateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUncheckedUpdateManyWithoutUtilisateurNestedInput
    coche_items?: cocherUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type DestinationUpsertWithoutUtilisateursInput = {
    update: XOR<DestinationUpdateWithoutUtilisateursInput, DestinationUncheckedUpdateWithoutUtilisateursInput>
    create: XOR<DestinationCreateWithoutUtilisateursInput, DestinationUncheckedCreateWithoutUtilisateursInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutUtilisateursInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutUtilisateursInput, DestinationUncheckedUpdateWithoutUtilisateursInput>
  }

  export type DestinationUpdateWithoutUtilisateursInput = {
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUpdateManyWithoutDestinationNestedInput
    activites?: ActiviteUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutUtilisateursInput = {
    id_destination?: IntFieldUpdateOperationsInput | number
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUncheckedUpdateManyWithoutDestinationNestedInput
    activites?: ActiviteUncheckedUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUncheckedUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateWithoutChecklist_itemsInput = {
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireCreateNestedManyWithoutDestinationInput
    activites?: ActiviteCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parCreateNestedManyWithoutDestinationInput
    formalites?: requiertCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutChecklist_itemsInput = {
    id_destination?: number
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDestinationInput
    activites?: ActiviteUncheckedCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parUncheckedCreateNestedManyWithoutDestinationInput
    formalites?: requiertUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutChecklist_itemsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutChecklist_itemsInput, DestinationUncheckedCreateWithoutChecklist_itemsInput>
  }

  export type CheckListe_ItemCreateWithoutDestinationsInput = {
    nom_item: string
    coche_utilisateurs?: cocherCreateNestedManyWithoutChecklist_itemInput
  }

  export type CheckListe_ItemUncheckedCreateWithoutDestinationsInput = {
    id_checkliste_item?: number
    nom_item: string
    coche_utilisateurs?: cocherUncheckedCreateNestedManyWithoutChecklist_itemInput
  }

  export type CheckListe_ItemCreateOrConnectWithoutDestinationsInput = {
    where: CheckListe_ItemWhereUniqueInput
    create: XOR<CheckListe_ItemCreateWithoutDestinationsInput, CheckListe_ItemUncheckedCreateWithoutDestinationsInput>
  }

  export type DestinationUpsertWithoutChecklist_itemsInput = {
    update: XOR<DestinationUpdateWithoutChecklist_itemsInput, DestinationUncheckedUpdateWithoutChecklist_itemsInput>
    create: XOR<DestinationCreateWithoutChecklist_itemsInput, DestinationUncheckedCreateWithoutChecklist_itemsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutChecklist_itemsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutChecklist_itemsInput, DestinationUncheckedUpdateWithoutChecklist_itemsInput>
  }

  export type DestinationUpdateWithoutChecklist_itemsInput = {
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUpdateManyWithoutDestinationNestedInput
    activites?: ActiviteUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutChecklist_itemsInput = {
    id_destination?: IntFieldUpdateOperationsInput | number
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUncheckedUpdateManyWithoutDestinationNestedInput
    activites?: ActiviteUncheckedUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUncheckedUpdateManyWithoutDestinationNestedInput
    formalites?: requiertUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type CheckListe_ItemUpsertWithoutDestinationsInput = {
    update: XOR<CheckListe_ItemUpdateWithoutDestinationsInput, CheckListe_ItemUncheckedUpdateWithoutDestinationsInput>
    create: XOR<CheckListe_ItemCreateWithoutDestinationsInput, CheckListe_ItemUncheckedCreateWithoutDestinationsInput>
    where?: CheckListe_ItemWhereInput
  }

  export type CheckListe_ItemUpdateToOneWithWhereWithoutDestinationsInput = {
    where?: CheckListe_ItemWhereInput
    data: XOR<CheckListe_ItemUpdateWithoutDestinationsInput, CheckListe_ItemUncheckedUpdateWithoutDestinationsInput>
  }

  export type CheckListe_ItemUpdateWithoutDestinationsInput = {
    nom_item?: StringFieldUpdateOperationsInput | string
    coche_utilisateurs?: cocherUpdateManyWithoutChecklist_itemNestedInput
  }

  export type CheckListe_ItemUncheckedUpdateWithoutDestinationsInput = {
    id_checkliste_item?: IntFieldUpdateOperationsInput | number
    nom_item?: StringFieldUpdateOperationsInput | string
    coche_utilisateurs?: cocherUncheckedUpdateManyWithoutChecklist_itemNestedInput
  }

  export type DestinationCreateWithoutFormalitesInput = {
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireCreateNestedManyWithoutDestinationInput
    activites?: ActiviteCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parCreateNestedManyWithoutDestinationInput
    checklist_items?: contientCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutFormalitesInput = {
    id_destination?: number
    pays: string
    region: string
    description: string
    avis_global: number
    image1: string
    image2: string
    image3: string
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDestinationInput
    activites?: ActiviteUncheckedCreateNestedManyWithoutDestinationInput
    utilisateurs?: fait_parUncheckedCreateNestedManyWithoutDestinationInput
    checklist_items?: contientUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutFormalitesInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutFormalitesInput, DestinationUncheckedCreateWithoutFormalitesInput>
  }

  export type Formalite_administrative_ItemCreateWithoutDestinationsInput = {
    descripition_formalite: string
  }

  export type Formalite_administrative_ItemUncheckedCreateWithoutDestinationsInput = {
    id_formalite_administrative_item?: number
    descripition_formalite: string
  }

  export type Formalite_administrative_ItemCreateOrConnectWithoutDestinationsInput = {
    where: Formalite_administrative_ItemWhereUniqueInput
    create: XOR<Formalite_administrative_ItemCreateWithoutDestinationsInput, Formalite_administrative_ItemUncheckedCreateWithoutDestinationsInput>
  }

  export type DestinationUpsertWithoutFormalitesInput = {
    update: XOR<DestinationUpdateWithoutFormalitesInput, DestinationUncheckedUpdateWithoutFormalitesInput>
    create: XOR<DestinationCreateWithoutFormalitesInput, DestinationUncheckedCreateWithoutFormalitesInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutFormalitesInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutFormalitesInput, DestinationUncheckedUpdateWithoutFormalitesInput>
  }

  export type DestinationUpdateWithoutFormalitesInput = {
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUpdateManyWithoutDestinationNestedInput
    activites?: ActiviteUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutFormalitesInput = {
    id_destination?: IntFieldUpdateOperationsInput | number
    pays?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    avis_global?: FloatFieldUpdateOperationsInput | number
    image1?: StringFieldUpdateOperationsInput | string
    image2?: StringFieldUpdateOperationsInput | string
    image3?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUncheckedUpdateManyWithoutDestinationNestedInput
    activites?: ActiviteUncheckedUpdateManyWithoutDestinationNestedInput
    utilisateurs?: fait_parUncheckedUpdateManyWithoutDestinationNestedInput
    checklist_items?: contientUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type Formalite_administrative_ItemUpsertWithoutDestinationsInput = {
    update: XOR<Formalite_administrative_ItemUpdateWithoutDestinationsInput, Formalite_administrative_ItemUncheckedUpdateWithoutDestinationsInput>
    create: XOR<Formalite_administrative_ItemCreateWithoutDestinationsInput, Formalite_administrative_ItemUncheckedCreateWithoutDestinationsInput>
    where?: Formalite_administrative_ItemWhereInput
  }

  export type Formalite_administrative_ItemUpdateToOneWithWhereWithoutDestinationsInput = {
    where?: Formalite_administrative_ItemWhereInput
    data: XOR<Formalite_administrative_ItemUpdateWithoutDestinationsInput, Formalite_administrative_ItemUncheckedUpdateWithoutDestinationsInput>
  }

  export type Formalite_administrative_ItemUpdateWithoutDestinationsInput = {
    descripition_formalite?: StringFieldUpdateOperationsInput | string
  }

  export type Formalite_administrative_ItemUncheckedUpdateWithoutDestinationsInput = {
    id_formalite_administrative_item?: IntFieldUpdateOperationsInput | number
    descripition_formalite?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateurCreateWithoutCoche_itemsInput = {
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date | string
    tel: string
    commentaires?: CommentaireCreateNestedManyWithoutUtilisateurInput
    destinations?: fait_parCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutCoche_itemsInput = {
    id_utilisateur?: number
    nom: string
    prenom: string
    mail: string
    mot_de_passe: string
    date_de_naissance: Date | string
    tel: string
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutUtilisateurInput
    destinations?: fait_parUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutCoche_itemsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutCoche_itemsInput, UtilisateurUncheckedCreateWithoutCoche_itemsInput>
  }

  export type CheckListe_ItemCreateWithoutCoche_utilisateursInput = {
    nom_item: string
    destinations?: contientCreateNestedManyWithoutChecklist_itemInput
  }

  export type CheckListe_ItemUncheckedCreateWithoutCoche_utilisateursInput = {
    id_checkliste_item?: number
    nom_item: string
    destinations?: contientUncheckedCreateNestedManyWithoutChecklist_itemInput
  }

  export type CheckListe_ItemCreateOrConnectWithoutCoche_utilisateursInput = {
    where: CheckListe_ItemWhereUniqueInput
    create: XOR<CheckListe_ItemCreateWithoutCoche_utilisateursInput, CheckListe_ItemUncheckedCreateWithoutCoche_utilisateursInput>
  }

  export type UtilisateurUpsertWithoutCoche_itemsInput = {
    update: XOR<UtilisateurUpdateWithoutCoche_itemsInput, UtilisateurUncheckedUpdateWithoutCoche_itemsInput>
    create: XOR<UtilisateurCreateWithoutCoche_itemsInput, UtilisateurUncheckedCreateWithoutCoche_itemsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutCoche_itemsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutCoche_itemsInput, UtilisateurUncheckedUpdateWithoutCoche_itemsInput>
  }

  export type UtilisateurUpdateWithoutCoche_itemsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUpdateManyWithoutUtilisateurNestedInput
    destinations?: fait_parUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutCoche_itemsInput = {
    id_utilisateur?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    mot_de_passe?: StringFieldUpdateOperationsInput | string
    date_de_naissance?: DateTimeFieldUpdateOperationsInput | Date | string
    tel?: StringFieldUpdateOperationsInput | string
    commentaires?: CommentaireUncheckedUpdateManyWithoutUtilisateurNestedInput
    destinations?: fait_parUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type CheckListe_ItemUpsertWithoutCoche_utilisateursInput = {
    update: XOR<CheckListe_ItemUpdateWithoutCoche_utilisateursInput, CheckListe_ItemUncheckedUpdateWithoutCoche_utilisateursInput>
    create: XOR<CheckListe_ItemCreateWithoutCoche_utilisateursInput, CheckListe_ItemUncheckedCreateWithoutCoche_utilisateursInput>
    where?: CheckListe_ItemWhereInput
  }

  export type CheckListe_ItemUpdateToOneWithWhereWithoutCoche_utilisateursInput = {
    where?: CheckListe_ItemWhereInput
    data: XOR<CheckListe_ItemUpdateWithoutCoche_utilisateursInput, CheckListe_ItemUncheckedUpdateWithoutCoche_utilisateursInput>
  }

  export type CheckListe_ItemUpdateWithoutCoche_utilisateursInput = {
    nom_item?: StringFieldUpdateOperationsInput | string
    destinations?: contientUpdateManyWithoutChecklist_itemNestedInput
  }

  export type CheckListe_ItemUncheckedUpdateWithoutCoche_utilisateursInput = {
    id_checkliste_item?: IntFieldUpdateOperationsInput | number
    nom_item?: StringFieldUpdateOperationsInput | string
    destinations?: contientUncheckedUpdateManyWithoutChecklist_itemNestedInput
  }

  export type CommentaireCreateManyUtilisateurInput = {
    id_commentaire?: number
    note: number
    contenu: string
    date_commentaire: Date | string
    image_commentaire?: string | null
    destinationId: number
  }

  export type fait_parCreateManyUtilisateurInput = {
    destinationId: number
  }

  export type cocherCreateManyUtilisateurInput = {
    checklistItemId: number
    date_cocher: Date | string
  }

  export type CommentaireUpdateWithoutUtilisateurInput = {
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    destination?: DestinationUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutUtilisateurInput = {
    id_commentaire?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentaireUncheckedUpdateManyWithoutUtilisateurInput = {
    id_commentaire?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type fait_parUpdateWithoutUtilisateurInput = {
    destination?: DestinationUpdateOneRequiredWithoutUtilisateursNestedInput
  }

  export type fait_parUncheckedUpdateWithoutUtilisateurInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type fait_parUncheckedUpdateManyWithoutUtilisateurInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type cocherUpdateWithoutUtilisateurInput = {
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
    checklist_item?: CheckListe_ItemUpdateOneRequiredWithoutCoche_utilisateursNestedInput
  }

  export type cocherUncheckedUpdateWithoutUtilisateurInput = {
    checklistItemId?: IntFieldUpdateOperationsInput | number
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cocherUncheckedUpdateManyWithoutUtilisateurInput = {
    checklistItemId?: IntFieldUpdateOperationsInput | number
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireCreateManyDestinationInput = {
    id_commentaire?: number
    note: number
    contenu: string
    date_commentaire: Date | string
    image_commentaire?: string | null
    utilisateurId: number
  }

  export type ActiviteCreateManyDestinationInput = {
    id_activite?: number
    nom_activite: string
    description_activite: string
    image_activite?: string | null
  }

  export type fait_parCreateManyDestinationInput = {
    utilisateurId: number
  }

  export type contientCreateManyDestinationInput = {
    checklistItemId: number
  }

  export type requiertCreateManyDestinationInput = {
    formaliteItemId: number
  }

  export type CommentaireUpdateWithoutDestinationInput = {
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateur?: UtilisateurUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateWithoutDestinationInput = {
    id_commentaire?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateurId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentaireUncheckedUpdateManyWithoutDestinationInput = {
    id_commentaire?: IntFieldUpdateOperationsInput | number
    note?: IntFieldUpdateOperationsInput | number
    contenu?: StringFieldUpdateOperationsInput | string
    date_commentaire?: DateTimeFieldUpdateOperationsInput | Date | string
    image_commentaire?: NullableStringFieldUpdateOperationsInput | string | null
    utilisateurId?: IntFieldUpdateOperationsInput | number
  }

  export type ActiviteUpdateWithoutDestinationInput = {
    nom_activite?: StringFieldUpdateOperationsInput | string
    description_activite?: StringFieldUpdateOperationsInput | string
    image_activite?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActiviteUncheckedUpdateWithoutDestinationInput = {
    id_activite?: IntFieldUpdateOperationsInput | number
    nom_activite?: StringFieldUpdateOperationsInput | string
    description_activite?: StringFieldUpdateOperationsInput | string
    image_activite?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActiviteUncheckedUpdateManyWithoutDestinationInput = {
    id_activite?: IntFieldUpdateOperationsInput | number
    nom_activite?: StringFieldUpdateOperationsInput | string
    description_activite?: StringFieldUpdateOperationsInput | string
    image_activite?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type fait_parUpdateWithoutDestinationInput = {
    utilisateur?: UtilisateurUpdateOneRequiredWithoutDestinationsNestedInput
  }

  export type fait_parUncheckedUpdateWithoutDestinationInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
  }

  export type fait_parUncheckedUpdateManyWithoutDestinationInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
  }

  export type contientUpdateWithoutDestinationInput = {
    checklist_item?: CheckListe_ItemUpdateOneRequiredWithoutDestinationsNestedInput
  }

  export type contientUncheckedUpdateWithoutDestinationInput = {
    checklistItemId?: IntFieldUpdateOperationsInput | number
  }

  export type contientUncheckedUpdateManyWithoutDestinationInput = {
    checklistItemId?: IntFieldUpdateOperationsInput | number
  }

  export type requiertUpdateWithoutDestinationInput = {
    formalite?: Formalite_administrative_ItemUpdateOneRequiredWithoutDestinationsNestedInput
  }

  export type requiertUncheckedUpdateWithoutDestinationInput = {
    formaliteItemId?: IntFieldUpdateOperationsInput | number
  }

  export type requiertUncheckedUpdateManyWithoutDestinationInput = {
    formaliteItemId?: IntFieldUpdateOperationsInput | number
  }

  export type contientCreateManyChecklist_itemInput = {
    destinationId: number
  }

  export type cocherCreateManyChecklist_itemInput = {
    utilisateurId: number
    date_cocher: Date | string
  }

  export type contientUpdateWithoutChecklist_itemInput = {
    destination?: DestinationUpdateOneRequiredWithoutChecklist_itemsNestedInput
  }

  export type contientUncheckedUpdateWithoutChecklist_itemInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type contientUncheckedUpdateManyWithoutChecklist_itemInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type cocherUpdateWithoutChecklist_itemInput = {
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UtilisateurUpdateOneRequiredWithoutCoche_itemsNestedInput
  }

  export type cocherUncheckedUpdateWithoutChecklist_itemInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type cocherUncheckedUpdateManyWithoutChecklist_itemInput = {
    utilisateurId?: IntFieldUpdateOperationsInput | number
    date_cocher?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type requiertCreateManyFormaliteInput = {
    destinationId: number
  }

  export type requiertUpdateWithoutFormaliteInput = {
    destination?: DestinationUpdateOneRequiredWithoutFormalitesNestedInput
  }

  export type requiertUncheckedUpdateWithoutFormaliteInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
  }

  export type requiertUncheckedUpdateManyWithoutFormaliteInput = {
    destinationId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
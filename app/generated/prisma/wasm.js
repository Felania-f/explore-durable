
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UtilisateurScalarFieldEnum = {
  id_utilisateur: 'id_utilisateur',
  nom: 'nom',
  prenom: 'prenom',
  mail: 'mail',
  mot_de_passe: 'mot_de_passe',
  date_de_naissance: 'date_de_naissance',
  tel: 'tel'
};

exports.Prisma.DestinationScalarFieldEnum = {
  id_destination: 'id_destination',
  pays: 'pays',
  region: 'region',
  description: 'description',
  avis_global: 'avis_global',
  image1: 'image1',
  image2: 'image2',
  image3: 'image3'
};

exports.Prisma.CommentaireScalarFieldEnum = {
  id_commentaire: 'id_commentaire',
  note: 'note',
  contenu: 'contenu',
  date_commentaire: 'date_commentaire',
  image_commentaire: 'image_commentaire',
  utilisateurId: 'utilisateurId',
  destinationId: 'destinationId'
};

exports.Prisma.ActiviteScalarFieldEnum = {
  id_activite: 'id_activite',
  nom_activite: 'nom_activite',
  description_activite: 'description_activite',
  image_activite: 'image_activite',
  destinationId: 'destinationId'
};

exports.Prisma.ContactScalarFieldEnum = {
  id_contact: 'id_contact',
  nom: 'nom',
  prenom: 'prenom',
  mail: 'mail',
  message: 'message',
  date_envoie: 'date_envoie'
};

exports.Prisma.CheckListe_ItemScalarFieldEnum = {
  id_checkliste_item: 'id_checkliste_item',
  nom_item: 'nom_item'
};

exports.Prisma.Formalite_administrative_ItemScalarFieldEnum = {
  id_formalite_administrative_item: 'id_formalite_administrative_item',
  descripition_formalite: 'descripition_formalite'
};

exports.Prisma.Fait_parScalarFieldEnum = {
  utilisateurId: 'utilisateurId',
  destinationId: 'destinationId'
};

exports.Prisma.ContientScalarFieldEnum = {
  destinationId: 'destinationId',
  checklistItemId: 'checklistItemId'
};

exports.Prisma.RequiertScalarFieldEnum = {
  destinationId: 'destinationId',
  formaliteItemId: 'formaliteItemId'
};

exports.Prisma.CocherScalarFieldEnum = {
  utilisateurId: 'utilisateurId',
  checklistItemId: 'checklistItemId',
  date_cocher: 'date_cocher'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

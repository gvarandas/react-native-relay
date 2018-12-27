/**
 * @flow
 * @relayHash b60de7402d7ff0c747b38dec7449b079
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AddBookMutationVariables = {|
  title: string,
  author: string,
  cover?: ?string,
|};
export type AddBookMutationResponse = {|
  +addBook: ?{|
    +id: string,
    +title: ?string,
    +author: ?string,
    +cover: ?string,
  |}
|};
export type AddBookMutation = {|
  variables: AddBookMutationVariables,
  response: AddBookMutationResponse,
|};
*/


/*
mutation AddBookMutation(
  $title: String!
  $author: String!
  $cover: String
) {
  addBook(title: $title, author: $author, cover: $cover) {
    id
    title
    author
    cover
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "author",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cover",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addBook",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "author",
        "variableName": "author",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "cover",
        "variableName": "cover",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title",
        "type": "String!"
      }
    ],
    "concreteType": "Book",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "author",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cover",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "AddBookMutation",
  "id": null,
  "text": "mutation AddBookMutation(\n  $title: String!\n  $author: String!\n  $cover: String\n) {\n  addBook(title: $title, author: $author, cover: $cover) {\n    id\n    title\n    author\n    cover\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AddBookMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AddBookMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '076e44943548f3821b583f125f27fbc5';
module.exports = node;

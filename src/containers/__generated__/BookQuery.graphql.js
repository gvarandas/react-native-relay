/**
 * @flow
 * @relayHash efc45918a2a60b054da31b0aa4ae3aa7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BookQueryVariables = {|
  id: string
|};
export type BookQueryResponse = {|
  +book: ?{|
    +id: string,
    +title: ?string,
    +author: ?string,
    +cover: ?string,
  |}
|};
export type BookQuery = {|
  variables: BookQueryVariables,
  response: BookQueryResponse,
|};
*/


/*
query BookQuery(
  $id: String!
) {
  book(id: $id) {
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
    "name": "id",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "book",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
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
  "operationKind": "query",
  "name": "BookQuery",
  "id": null,
  "text": "query BookQuery(\n  $id: String!\n) {\n  book(id: $id) {\n    id\n    title\n    author\n    cover\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "BookQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '75ac6c03a289320edff3886a12c23d72';
module.exports = node;

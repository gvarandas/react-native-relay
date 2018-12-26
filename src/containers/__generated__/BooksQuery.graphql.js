/**
 * @flow
 * @relayHash 4b6db7da099af288233541105b6f783c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BooksQueryVariables = {||};
export type BooksQueryResponse = {|
  +books: ?$ReadOnlyArray<?{|
    +id: string,
    +author: ?string,
    +title: ?string,
  |}>
|};
export type BooksQuery = {|
  variables: BooksQueryVariables,
  response: BooksQueryResponse,
|};
*/


/*
query BooksQuery {
  books {
    id
    author
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "books",
    "storageKey": null,
    "args": null,
    "concreteType": "Book",
    "plural": true,
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
        "name": "author",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BooksQuery",
  "id": null,
  "text": "query BooksQuery {\n  books {\n    id\n    author\n    title\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BooksQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "BooksQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b199da774463f0142dd36fc4712d4052';
module.exports = node;

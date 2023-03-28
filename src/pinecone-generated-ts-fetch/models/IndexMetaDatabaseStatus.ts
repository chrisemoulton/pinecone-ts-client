/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: version not set
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface IndexMetaDatabaseStatus
 */
export interface IndexMetaDatabaseStatus {
    /**
     * 
     * @type {boolean}
     * @memberof IndexMetaDatabaseStatus
     */
    ready?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IndexMetaDatabaseStatus
     */
    state?: IndexMetaDatabaseStatusStateEnum;
}


/**
 * @export
 */
export const IndexMetaDatabaseStatusStateEnum = {
    Initializing: 'Initializing',
    ScalingUp: 'ScalingUp',
    ScalingDown: 'ScalingDown',
    Terminating: 'Terminating',
    Ready: 'Ready'
} as const;
export type IndexMetaDatabaseStatusStateEnum = typeof IndexMetaDatabaseStatusStateEnum[keyof typeof IndexMetaDatabaseStatusStateEnum];


/**
 * Check if a given object implements the IndexMetaDatabaseStatus interface.
 */
export function instanceOfIndexMetaDatabaseStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IndexMetaDatabaseStatusFromJSON(json: any): IndexMetaDatabaseStatus {
    return IndexMetaDatabaseStatusFromJSONTyped(json, false);
}

export function IndexMetaDatabaseStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndexMetaDatabaseStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ready': !exists(json, 'ready') ? undefined : json['ready'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function IndexMetaDatabaseStatusToJSON(value?: IndexMetaDatabaseStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ready': value.ready,
        'state': value.state,
    };
}

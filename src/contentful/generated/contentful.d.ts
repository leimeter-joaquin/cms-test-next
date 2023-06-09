// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface IOpenPositionsFields {
  /** Name */
  name?: string | undefined;
}

export interface IOpenPositions extends Entry<IOpenPositionsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "openPositions";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITheyTrustUsCompaniesFields {
  /** name */
  name?: string | undefined;

  /** icon */
  icon?: Asset | undefined;
}

/** These are the companies that trust Radium Rocket with building complex web and mobile applications. */

export interface ITheyTrustUsCompanies
  extends Entry<ITheyTrustUsCompaniesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "theyTrustUsCompanies";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "openPositions" | "theyTrustUsCompanies";

export type IEntry = IOpenPositions | ITheyTrustUsCompanies;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";

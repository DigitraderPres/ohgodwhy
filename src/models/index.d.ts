import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerProductList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productName?: string | null;
  readonly productImgPath?: string | null;
  readonly endtimeUnix?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProductList = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProductList, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productName?: string | null;
  readonly productImgPath?: string | null;
  readonly endtimeUnix?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProductList = LazyLoading extends LazyLoadingDisabled ? EagerProductList : LazyProductList

export declare const ProductList: (new (init: ModelInit<ProductList>) => ProductList) & {
  copyOf(source: ProductList, mutator: (draft: MutableModel<ProductList>) => MutableModel<ProductList> | void): ProductList;
}
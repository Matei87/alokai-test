// import type { FakeStoreIntegrationContext } from "@vue-storefront/fakestore-api";
// import { Endpoints as StoryblokEndpoints } from '@vue-storefront/storyblok-api';

export async function getRelatedProducts(
  context: any,
  params: { productId: string }
) {
  const storyblokClient = context.getApiClient('storyblok');

  try {
    const cmsContent = await storyblokClient.api.getContent({
      url: `product-${params.productId}`,
    });

    const productIds: string[] = cmsContent.body.map(
      (item: { product_id: string }) => item.product_id
    );

    const promises = productIds.map((productId: string) =>
      context.api.getProduct({ code: productId })
    );

    const relatedProducts = await Promise.all(promises);

    return relatedProducts.map(({ data }) => data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

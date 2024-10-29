import RenderComponent from "@/components/cms/RenderComponent";
import type { AgnosticCmsComponent } from "@/components/cms/types";
import { getSdk } from "@/sdk/sdk.config";

export default async function Page() {
  const content = await getSdk().storyblok.getContent({
    url: "home",
  });
  const { data } = await getSdk().fakestore.getProducts({
    options: {
      limit: 20,
    },
  });

  function renderComponents(
    components: AgnosticCmsComponent[] = [],
    hidden = false,
  ) {
    return components.map((component) => (
      <RenderComponent
        key={component._uid}
        item={component}
        products={data}
        hidden={hidden}
      />
    ));
  }

  return <main className="px-12">{renderComponents(content.body, true)}</main>;
}

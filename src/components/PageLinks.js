import { pageLinks } from "../data"
import PageLink from "./PageLink"

function PageLinks({parentClass, itemClass}) {
	return (
		<ul className={parentClass}>
			{pageLinks.map((link) => {
				return (
					<PageLink key={link.id} link={link} itemClass={itemClass} />
				)
			})}
		</ul>
	)
}
export default PageLinks

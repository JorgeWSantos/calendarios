import { Text } from '@abqm-ui2/react';
import type { MenuItems } from '@abqm-ui2/react';
import HeaderMobileComponent from './HeaderMobileComponent';
import {
  Container,
  MenuItem,
  MenuLink,
  MenuList,
  SubMenuItem,
  SubMenuLink,
  SubMenuList,
} from './styles';
import { colors } from '@abqm-ui2/tokens';
import { useRef, useState } from 'react';

interface Props {
  title?: string;
  page?: string;
  data: MenuItems[];
}

const HeaderMobile = ({ title = 'SEQM', page = 'Calendários', data, ...rest }: Props) => {
  const [menu, setMenu] = useState<MenuItems[]>(data);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [userNavigation, setUserNavigation] = useState('Menu');

  const subMenuRef = useRef<HTMLUListElement | null>(null);

  const [visibleSubmenu, setVisibleSubmenu] = useState<number | null>(null);
  // const [currentIndexSelected, setCurrentIndexSelected] = useState<number>(0);

  const handleOpenSubMenu = (index: number, item: MenuItems) => {
    // setCurrentIndexSelected(index);

    if ('submenu' in item) {
      const isVisible = item.open_submenu;

      setMenu((prev) =>
        prev.map((item, i) =>
          i === index && 'submenu' in item
            ? { ...item, open_submenu: !item.open_submenu }
            : { ...item, open_submenu: false }
        )
      );

      if (!isVisible) {
        setUserNavigation(item.name);
        setVisibleSubmenu(index);
      } else {
        setTimeout(() => {
          setVisibleSubmenu(null);
        }, 200);
      }
    } else {
      setMenu(data); // reset menu

      setTimeout(() => {
        setVisibleSubmenu(null);
      }, 200);
    }
  };

  const toggleMenu = () => {
    console.log('toggleMenu', toggleMenu);
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Container {...rest}>
      <HeaderMobileComponent
        title={title}
        page={menuIsOpen ? userNavigation : page}
        menuIsOpen={menuIsOpen}
        visibleSubmenu={visibleSubmenu !== null}
        hideSubMenu={() => {
          setVisibleSubmenu(null);
          setMenu(data);
        }}
        toggleMenu={toggleMenu}
      />

      <MenuList menuIsOpen={menuIsOpen} subMenuIsOpen={visibleSubmenu !== null}>
        {menu.map((item, i) => {
          const hasSubmenu = 'submenu' in item;
          // const isSelected = menuItemSelectedIndex === i;

          return (
            <MenuItem key={item.name} index={i} subMenuIsOpen={visibleSubmenu !== null}>
              <MenuLink
                href={item.link}
                onClick={(e) => {
                  console.log('here');
                  e.preventDefault();
                  handleOpenSubMenu(i, item);
                }}
                subMenuIsOpen={visibleSubmenu !== null}
              >
                <Text
                  fontSize="mdd"
                  fontWeight="regular"
                  lineHeight="shorter"
                  color={colors.white75}
                >
                  {item.name}
                </Text>
              </MenuLink>

              {hasSubmenu && (
                <SubMenuList ref={subMenuRef} visible={item.open_submenu}>
                  {item.submenu.map((subitem) => (
                    <SubMenuItem key={subitem.name}>
                      <SubMenuLink href={subitem.link}>{subitem.name}</SubMenuLink>
                    </SubMenuItem>
                  ))}
                </SubMenuList>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    </Container>
  );
};

export default HeaderMobile;

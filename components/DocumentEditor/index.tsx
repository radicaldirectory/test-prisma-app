import {
  SlatePlugins,
  createReactPlugin,
  createHistoryPlugin,
  createParagraphPlugin,
  createBlockquotePlugin,
  createHeadingPlugin,
  createBoldPlugin,
  createItalicPlugin,
  createUnderlinePlugin,
  createSlatePluginsComponents,
  createSlatePluginsOptions,
  createTrailingBlockPlugin,
  createExitBreakPlugin,
  createNormalizeTypesPlugin,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
  KEYS_HEADING,
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_PARAGRAPH,
  HeadingToolbar,
  ToolbarMark,
  ToolbarElement,
  useStoreEditorRef,
  useEventEditorId,
  getSlatePluginType,
  withProps,
  StyledElement
} from "@udecode/slate-plugins";
import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  HeadingIcon
} from "@radix-ui/react-icons";
import { styled } from "../../stitches.config";

const optionsExitBreakPlugin = {
  rules: [
    {
      hotkey: "mod+enter"
    },
    {
      hotkey: "mod+shift+enter",
      before: true
    },
    {
      hotkey: "enter",
      query: {
        start: true,
        end: true,
        allow: KEYS_HEADING
      }
    }
  ]
};

const StyledH1 = styled("h1", {
  margin: "40px 0 10px"
});

const StyledParagraph = styled("p", {
  margin: "10px 0px"
});

const components = createSlatePluginsComponents({
  [ELEMENT_PARAGRAPH]: withProps(StyledElement, {
    as: StyledParagraph
  }),
  [ELEMENT_H1]: withProps(StyledElement, {
    as: StyledH1
  })
});
const options = createSlatePluginsOptions();

const pluginsBasic = [
  // editor
  createReactPlugin(), // withReact
  createHistoryPlugin(), // withHistory

  // elements
  createParagraphPlugin(), // paragraph element
  createBlockquotePlugin(), // blockquote element
  createHeadingPlugin(), // heading elements

  // marks
  createBoldPlugin(), // bold mark
  createItalicPlugin(), // italic mark
  createUnderlinePlugin(), // underline mark

  createTrailingBlockPlugin({ type: ELEMENT_PARAGRAPH }),
  createExitBreakPlugin(optionsExitBreakPlugin),
  createNormalizeTypesPlugin({
    rules: [{ path: [0], strictType: ELEMENT_H1 }]
  })
];

const initialValueBasic = [
  {
    type: ELEMENT_H1,
    children: [
      {
        text: ""
      }
    ]
  }
];

const Editor = styled("div", {
  "& .slate-Toolbar": {
    display: "flex",
    border: "2px black"
  }
});

export const DocumentEditor = (props) => {
  const editableProps = {
    placeholder: props.placeholder,
    style: {
      padding: "15px"
    }
  };

  const editor = useStoreEditorRef(useEventEditorId("focus"));

  return (
    <Editor>
      <HeadingToolbar>
        <ToolbarElement
          type={getSlatePluginType(editor, ELEMENT_H2)}
          icon={<HeadingIcon />}
        />
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_BOLD)}
          icon={<FontBoldIcon />}
        />
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_ITALIC)}
          icon={<FontItalicIcon />}
        />
        <ToolbarMark
          type={getSlatePluginType(editor, MARK_UNDERLINE)}
          icon={<UnderlineIcon />}
        />
      </HeadingToolbar>
      <SlatePlugins
        editableProps={editableProps}
        plugins={pluginsBasic}
        components={components}
        options={options}
        initialValue={initialValueBasic}
        onChange={(newValue) => props.onChange(newValue)}
      >
        {props.children}
      </SlatePlugins>
    </Editor>
  );
};

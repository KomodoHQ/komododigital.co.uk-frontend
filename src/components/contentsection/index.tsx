/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import ReactDOMServer from 'react-dom/server';
import Img from 'gatsby-image';
import './content-section.css';

import { Editor } from 'slate-react';
import Plain from 'slate-plain-serializer';
import Prism from 'prismjs';
import Html from 'slate-html-serializer';

// eslint-disable-next-line
Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold); // prettier-ignore

const BLOCK_TAGS = {
  blockquote: 'quote',
  p: 'paragraph',
  pre: 'code',
};

// Add a dictionary of mark tags.
const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline',
};

const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'block',
          type: type,
          data: {
            className: el.getAttribute('class'),
          },
          nodes: next(el.childNodes),
        };
      }
    },
    serialize(obj, children) {
      if (obj.object == 'block') {
        switch (obj.type) {
          case 'code':
            return (
              <pre>
                <code>{children}</code>
              </pre>
            );
          case 'paragraph':
            return <p className={obj.data.get('className')}>{children}</p>;
          case 'quote':
            return <blockquote>{children}</blockquote>;
        }
      }
    },
  },
  // Add a new rule that handles marks...
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'mark',
          type: type,
          nodes: next(el.childNodes),
        };
      }
    },
    serialize(obj, children) {
      if (obj.object == 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>;
          case 'italic':
            return <em>{children}</em>;
          case 'underline':
            return <u>{children}</u>;
        }
      }
    },
  },
];

const html = new Html({ rules });

/**
 * Local dependencies
 */

/**
 * Props for the content section component
 *
 * data
 */
interface Props {
  title?: string;
  subtitle?: string;
  invert?: boolean;
  background?: string;
  className?: string;
  children: ReactNode;
  coverimage?: any;
  source?: string;
}
class ContentSection extends React.Component<Props> {
  state = {
    subtitleValue: this.props.subtitle
      ? Plain.deserialize(this.props.subtitle)
      : Plain.deserialize(''),
    titleValue: this.props.title ? Plain.deserialize(this.props.title) : Plain.deserialize(''),
    bodyValue: html.deserialize(ReactDOMServer.renderToStaticMarkup(this.props.children)),
    editing: false,
  };

  // On change, update the app's React state with the new editor value.
  onChangeSubtitleText = ({ value }) => {
    this.setState({ subtitleValue: value });
  };

  onChangeTitleText = ({ value }) => {
    this.setState({ titleValue: value });
  };

  onChangeBodyText = ({ value }) => {
    this.setState({ bodyValue: value });
  };

  /**
   * Render a Slate mark.
   *
   * @param {Object} props
   * @param {Editor} editor
   * @param {Function} next
   * @return {Element}
   */

  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props;

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>;

      case 'code':
        return <code {...attributes}>{children}</code>;

      case 'italic':
        return <em {...attributes}>{children}</em>;

      case 'underlined':
        return <u {...attributes}>{children}</u>;

      case 'title': {
        return (
          <span
            {...attributes}
            style={{
              fontWeight: 'bold',
              fontSize: '20px',
              margin: '20px 0 10px 0',
              display: 'inline-block',
            }}
          >
            {children}
          </span>
        );
      }

      case 'punctuation': {
        return (
          <span {...attributes} style={{ opacity: 0.2 }}>
            {children}
          </span>
        );
      }

      case 'list': {
        return (
          <span
            {...attributes}
            style={{
              paddingLeft: '10px',
              lineHeight: '10px',
              fontSize: '20px',
            }}
          >
            {children}
          </span>
        );
      }

      case 'hr': {
        return (
          <span
            {...attributes}
            style={{
              borderBottom: '2px solid #000',
              display: 'block',
              opacity: 0.2,
            }}
          >
            {children}
          </span>
        );
      }

      default: {
        return next();
      }
    }
  };

  /**
   * Define a decorator for markdown styles.
   *
   * @param {Node} node
   * @param {Function} next
   * @return {Array}
   */

  decorateNode(node, editor, next) {
    const others = next() || [];
    if (node.object !== 'block') return others;

    const string = node.text;
    const texts = node.getTexts().toArray();
    const grammar = Prism.languages.markdown;
    const tokens = Prism.tokenize(string, grammar);
    const decorations = [];
    let startText = texts.shift();
    let endText = startText;
    let startOffset = 0;
    let endOffset = 0;
    let start = 0;

    function getLength(token) {
      if (typeof token == 'string') {
        return token.length;
      } else if (typeof token.content == 'string') {
        return token.content.length;
      } else {
        return token.content.reduce((l, t) => l + getLength(t), 0);
      }
    }

    for (const token of tokens) {
      startText = endText;
      startOffset = endOffset;

      const length = getLength(token);
      const end = start + length;

      let available = startText.text.length - startOffset;
      let remaining = length;

      endOffset = startOffset + remaining;

      while (available < remaining) {
        endText = texts.shift();
        remaining = length - available;
        available = endText.text.length;
        endOffset = remaining;
      }

      if (typeof token != 'string') {
        const dec = {
          anchor: {
            key: startText.key,
            offset: startOffset,
          },
          focus: {
            key: endText.key,
            offset: endOffset,
          },
          mark: {
            type: token.type,
          },
        };

        decorations.push(dec);
      }

      start = end;
    }

    return [...others, ...decorations];
  }

  render() {
    const { invert, background = 'none', className = '', children, coverimage = null } = this.props;

    const subtitleEl = this.state.subtitleValue ? (
      <span>{Plain.serialize(this.state.subtitleValue)}</span>
    ) : null;

    const titleEl = this.state.titleValue ? (
      <h2>{Plain.serialize(this.state.titleValue)}</h2>
    ) : null;

    const bodyEl = this.state.bodyValue ? (
      <div dangerouslySetInnerHTML={{
        __html: html.serialize(this.state.bodyValue),
      }} />
    ) : null;

    const invertedClassname = invert ? 'invert' : '';

    const style = {
      background,
    };

    let coverImage;
    if (coverimage !== null) {
      coverImage = <Img fluid={coverimage.childImageSharp.fluid} />;
    } else {
      coverImage = null;
    }

    return (
      <div
        className={`komodoGridWrapper cs-wrapper ${invertedClassname} ${className}`}
        style={style}
      >
        <div className={`Content-Section`}>
          <div className={`editButton`}>
            <span
              onClick={() => {
                this.setState({ editing: !this.state.editing });
              }}
            >
              {this.state.editing && <>Stop</>}
              {!this.state.editing && <>Edit</>}
            </span>
          </div>

          {this.state.editing && (
            <span>
              <Editor
                placeholder="Write some markdown..."
                defaultValue={this.state.subtitleValue}
                renderMark={this.renderMark}
                decorateNode={this.decorateNode}
                onChange={this.onChangeSubtitleText}
              />
            </span>
          )}

          {!this.state.editing && subtitleEl}

          {this.state.editing && (
            <h2>
              <Editor
                placeholder="Write some markdown..."
                defaultValue={this.state.titleValue}
                renderMark={this.renderMark}
                decorateNode={this.decorateNode}
                onChange={this.onChangeTitleText}
              />
            </h2>
          )}

          {!this.state.editing && titleEl}

          {this.state.editing && (
            <div>
              <Editor
                placeholder="Write some markdown..."
                defaultValue={this.state.bodyValue}
                renderMark={this.renderMark}
                decorateNode={this.decorateNode}
                onChange={this.onChangeBodyText}
              />
            </div>
          )}

          {!this.state.editing && bodyEl}
        </div>
        {coverImage}
      </div>
    );
  }
}

export default ContentSection;

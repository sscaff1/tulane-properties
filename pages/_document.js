import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return {
      html,
      head,
      errorHtml,
      chunks,
      styles,
      googleMapsUrl: `https://maps.googleapis.com/maps/api/js?key=${process.env
        .MAP_KEY}&libraries=places`,
    };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Tulane Properties</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto+Condensed"
            rel="stylesheet"
          />
          <script src={this.props.googleMapsUrl} />
          <style
          >{`* { box-sizing: border-box; font-family: 'Roboto Condensed', sans-serif; }`}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

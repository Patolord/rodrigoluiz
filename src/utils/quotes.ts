export interface Quote {
  text: string;
  author: string;
}

export class QuoteShuffler {
  private quotes: Quote[];
  private shownQuotes: Set<string>;

  constructor(quotes: Quote[]) {
    this.quotes = quotes;
    this.shownQuotes = new Set();
  }

  /**
   * Gets a random quote that hasn't been shown yet
   * Resets the shown quotes when all have been displayed
   */
  getRandomQuote(): Quote {
    // If there's only one quote, return it
    if (this.quotes.length === 1) {
      return this.quotes[0];
    }

    // Get quotes that haven't been shown yet
    const availableQuotes = this.quotes.filter(
      (q) => !this.shownQuotes.has(q.text)
    );

    // If all quotes have been shown, reset the set
    if (availableQuotes.length === 0) {
      this.shownQuotes.clear();
      return this.getRandomQuote();
    }

    // Get a random quote from available quotes
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const selectedQuote = availableQuotes[randomIndex];

    // Mark this quote as shown
    this.shownQuotes.add(selectedQuote.text);

    return selectedQuote;
  }

  /**
   * Resets the shuffle history
   */
  reset(): void {
    this.shownQuotes.clear();
  }
}

/**
 * Renders a quote as HTML
 */
export function renderQuote(quote: Quote): string {
  return `
    <blockquote class="border-l-2 border-primary pl-3 py-1">
      <p class="text-lg italic">"${quote.text}"</p>
      <footer class="text-sm text-base-content/70 mt-0.5">
        — ${quote.author}
      </footer>
    </blockquote>
  `;
}


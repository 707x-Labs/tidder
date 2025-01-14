/**
 * Represents possible types for path parameters in URLs
 */
type PathParam = string | number;

/**
 * Represents possible types for query parameter values
 */
type QueryValue = string | number | boolean | (string | number | boolean)[];

/**
 * A builder class for constructing URLs with path parameters and query strings.
 * Supports array parameters as comma-separated values.
 *
 * @example
 * ```typescript
 * const builder = new CreateEndpoint('https://api.example.com');
 *
 * // Basic usage
 * const url = builder
 *   .url('/users/:id')
 *   .path('123')
 *   .query({ status: 'active' })
 *   .build();
 * // Result: https://api.example.com/users/123?status=active
 *
 * // With array parameters
 * const urlWithArrays = builder
 *   .url('/posts')
 *   .query({
 *     tags: ['news', 'tech'],
 *     status: 'published'
 *   })
 *   .build();
 * // Result: https://api.example.com/posts?tags=news,tech&status=published
 * ```
 */
class CreateEndpoint {
  private readonly baseUrl: string;
  private pathname: string;
  private pathParams: PathParam[];
  private queryParams: Map<string, QueryValue>;

  /**
   * Creates a new instance of ApiUrlBuilder
   *
   * @param baseUrl - Base Url
   * @throws {Error} If baseUrl is not provided
   */
  constructor(baseUrl: string) {
    if (!baseUrl) {
      throw new Error("baseUrl is required");
    }
    this.baseUrl = baseUrl.replace(/\/$/, "");
    this.pathname = "";
    this.pathParams = [];
    this.queryParams = new Map();
  }

  /**
   * Sets the API pathname with path parameters
   *
   * @param pathname - The pathname with optional parameters (e.g., '/users/:id')
   * @returns The builder instance for chaining
   * @example
   * ```typescript
   * builder.url('/users/:id/posts/:postId')
   * ```
   */
  url(pathname: string): this {
    this.pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
    return this;
  }

  /**
   * Adds path parameters to replace placeholders in the endpoint
   *
   * @param params - Values to replace path parameters in order of appearance
   * @returns The builder instance for chaining
   * @example
   * ```typescript
   * builder
   *   .url('/users/:userId/posts/:postId')
   *   .path('123', '456')
   * ```
   */
  path(...params: PathParam[]): this {
    this.pathParams = params;
    return this;
  }

  /**
   * Adds query parameters to the URL
   * Arrays will be converted to comma-separated values
   *
   * @param params - Object containing query parameters
   * @returns The builder instance for chaining
   * @example
   * ```typescript
   * builder.query({
   *   tags: ['news', 'tech'],    // Will become ?tags=news,tech
   *   status: 'active',          // Will become &status=active
   *   ids: [1, 2, 3],           // Will become &ids=1,2,3
   *   showDeleted: false
   * })
   * ```
   */
  query(params: Record<string, QueryValue | null | undefined>): this {
    Object.entries(params).forEach(([key, value]) => {
      if (value != null) {
        this.queryParams.set(key, value);
      }
    });
    return this;
  }

  /**
   * Builds the final URL string
   *
   * @returns The complete URL with path parameters replaced and query string appended
   * @throws {Error} If there are missing path parameters
   * @example
   * ```typescript
   * const url = builder
   *   .url('/users/:id')
   *   .path('123')
   *   .query({ status: 'active' })
   *   .build();
   * ```
   */
  build(): string {
    const processedEndpoint = this.replacePlaceholders();
    const url = new URL(this.baseUrl + processedEndpoint);

    this.queryParams.forEach((value, key) => {
      if (Array.isArray(value)) {
        url.searchParams.append(key, value.join(","));
      } else {
        url.searchParams.append(key, String(value));
      }
    });

    return url.toString();
  }

  /**
   * Replaces placeholder parameters in the pathname with actual values
   *
   * @private
   * @returns The processed pathname with replaced parameters
   * @throws {Error} If there are missing path parameters
   */
  private replacePlaceholders(): string {
    const result = this.pathname;
    let paramIndex = 0;

    const placeholderRegex = /:([^/]+)/g;

    return result.replace(placeholderRegex, (match) => {
      if (paramIndex >= this.pathParams.length) {
        throw new Error(`Missing path parameter for placeholder ${match}`);
      }
      return String(this.pathParams[paramIndex++]);
    });
  }
}

export default CreateEndpoint;

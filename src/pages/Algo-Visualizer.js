import React from 'react';

import Layout from '../components/Layout';
import visualizer from '../assets/images/visualizer.png';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Animation and Algorithm Visualizer</h2>
          <div style={{ textAlign: 'center' }}>
            <img
              style={{ width: '50%', height: '50%' }}
              src={visualizer}
              alt="..."
            ></img>
          </div>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <ul>
            <li>
              <p>
                A Java application that takes as input a .txt containing a
                formatted description of an animation and then uses Swing in
                order to visualize the animation.
              </p>
            </li>
            <li>
              <p>
                Programming scripts can harness the application’s true power to
                generate formatted .txt files for animations of popular
                algorithms.
                <br />
                The .txt files generated through these scripts can then be
                rendered by this application and help visualize these popular
                algorithms.
              </p>
            </li>
            <li>
              <p>
                The application also supports outtputting a .svg file for the
                animation that can be used to render it on a browser.
                <br />
                Consequently, a set of textual instructions, either
                programmatically or manually generated, can be converted into an
                SVG animation.
              </p>
            </li>
          </ul>
          <div class="flex-div" style={{ maxWidth: '100%' }}>
            <img
              style={{ height: '100%' }}
              src="https://user-images.githubusercontent.com/30478978/104137968-d3cf0580-536e-11eb-9103-9ab1d99cfb5d.gif"
              alt="gif"
            />
            <img
              style={{ height: '100%' }}
              src="https://user-images.githubusercontent.com/30478978/104137867-f7458080-536d-11eb-8aa7-8b7379323e63.gif"
              alt="gif"
            />
          </div>
          <h2 class="code-line" data-line-start="41" data-line-end="42">
            <a id="Views_41"></a>Views
          </h2>
          <p class="has-line-data" data-line-start="43" data-line-end="44">
            The application supports rendering the animation in 3 types of
            views:
          </p>
          <ol>
            <li class="has-line-data" data-line-start="45" data-line-end="46">
              visual: A visual rendering of the animation on a Swing frame
            </li>
            <li class="has-line-data" data-line-start="46" data-line-end="51">
              interactive: A visual rendering of the animation with an
              interactive toolbar that supports
              <ol>
                <li
                  class="has-line-data"
                  data-line-start="47"
                  data-line-end="48"
                >
                  Playing and pausing the animation
                </li>
                <li
                  class="has-line-data"
                  data-line-start="48"
                  data-line-end="49"
                >
                  Speeding up and slowing down the animation
                </li>
                <li
                  class="has-line-data"
                  data-line-start="49"
                  data-line-end="50"
                >
                  Looping the animation
                </li>
                <li
                  class="has-line-data"
                  data-line-start="50"
                  data-line-end="51"
                >
                  Restarting the animation
                </li>
              </ol>
            </li>
            <li class="has-line-data" data-line-start="51" data-line-end="53">
              svg: A .svg file of the animation that can be used to render it on
              the browser
            </li>
          </ol>
          <h2 class="code-line" data-line-start={69} data-line-end={70}>
            <a id="Algorithmic_Visualizations_69"></a>Algorithmic Visualizations
          </h2>
          <p class="has-line-data" data-line-start="71" data-line-end="72">
            The project has two Java scripts that create .txt files that enable
            the application to visualize the Fisher Yates shuffle and the
            Randomized Quick Sort algorithms.
          </p>
          <p class="has-line-data" data-line-start="73" data-line-end="75">
            The scripts can be found under the src directory as Shuffle.java and
            QuickSortAnimator.java, and the output of these files can be found
            under the resources directory.
            <br />
            These two scripts serve as a demonstration of what can be achieved
            by this application.
          </p>

          <div
            class="flex-div"
            style={{ marginBottom: '2em', maxWidth: '100%' }}
          >
            <img
              style={{ height: '100%', width: '100%' }}
              src="https://user-images.githubusercontent.com/30478978/104137870-f9a7da80-536d-11eb-9b4b-b823ca13b2aa.gif"
              alt="animated"
            />
            <img
              style={{ height: '100%', width: '100%' }}
              src="https://user-images.githubusercontent.com/30478978/104137869-f876ad80-536d-11eb-9342-47244135c273.gif"
              alt="animated"
            />
          </div>
          <h2 class="code-line" data-line-start={53} data-line-end={54}>
            <a id="Input_Formatting_53"></a>Input Formatting
          </h2>
          <p class="has-line-data" data-line-start="55" data-line-end="56">
            The input files need to be follow the following guidelines for the
            application to render them:
          </p>
          <ol>
            <li class="has-line-data" data-line-start="57" data-line-end="58">
              The first line should describe the canvas properties in the form:
              canvas &lt;top-left-x-coordinate&gt; &lt;top-left-x-coordinate&gt;
              &lt;width&gt; &lt;height&gt;
            </li>
            <li class="has-line-data" data-line-start="58" data-line-end="59">
              All directions for the animation should be on a seperate line
            </li>
            <li class="has-line-data" data-line-start="59" data-line-end="60">
              Each direction may be either adding an object onto the screen or
              updating the object’s properties
            </li>
            <li class="has-line-data" data-line-start="60" data-line-end="61">
              To add an object: shape &lt;shape-name&gt; &lt;shape-type&gt;
            </li>
            <li class="has-line-data" data-line-start="61" data-line-end="63">
              To update an object: motion &lt;shape-name&gt; &lt;start-tick&gt;
              &lt;before-x-coordinate&gt; &lt;before-y-coordinate&gt;
              &lt;before-width&gt; &lt;before-height&gt; &lt;before-red&gt;
              &lt;before-green&gt; &lt;before-blue&gt; &lt;\end-tick&gt;
              &lt;after-x-coordinate&gt; &lt;after-y-coordinate&gt;
              &lt;after-width&gt; &lt;after-height&gt; &lt;after-red&gt;
              &lt;after-green&gt; &lt;after-blue&gt;
            </li>
          </ol>
          <h3 class="code-line" data-line-start="63" data-line-end="64">
            <a id="Sample_Input_Files_63"></a>Sample Input Files
          </h3>
          <p class="has-line-data" data-line-start="65" data-line-end="66">
            To gain a better insight into the type of input the application
            accepts, have a look at some of the sample .txt input files in the
            resources directory.
          </p>
          <p class="has-line-data" data-line-start="67" data-line-end="68">
            These files may also be used to test the application and render a
            few cool animations.
          </p>
          <h2 class="code-line" data-line-start="76" data-line-end="77">
            <a id="Authors_76"></a>Authors
          </h2>
          <ul>
            <li class="has-line-data" data-line-start="78" data-line-end="79">
              <strong>Aryan Shah</strong> -{' '}
              <em>
                Algorithm Scripts, Logic, Controller, Visual, Interactive, and
                SVG Views
              </em>
            </li>
            <li class="has-line-data" data-line-start="79" data-line-end="81">
              <strong>Rohini Jangi</strong> - <em>Main and Textual View</em>
            </li>
          </ul>

          <h2 class="code-line" data-line-start="81" data-line-end="82">
            <a id="Acknowledgments_81"></a>Acknowledgments
          </h2>
          <ul>
            <li class="has-line-data" data-line-start="83" data-line-end="84">
              <strong>Amit Shesh</strong> -{' '}
              <em>Animation Builder and Animation Reader</em>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;

<div class="post-body">
   <div id="links">
      <style>
        /* 1. 布局容器：严格 50/50 分配 */
        .link-navigation {
            display: grid;
            /* 强制两列等宽，不受内容长度影响 */
            grid-template-columns: 1fr 1fr; 
            gap: 20px;
            width: 100%;
        }

        /* 2. 卡片样式 */
        .card {
            display: flex;
            align-items: center; 
            padding: 15px;
            border-radius: 8px;
            background-color: var(--md-default-bg-color);
            border: 1px solid #e0e0e0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            text-decoration: none !important;

            /* 自动拉伸高度，确保同一行两个卡片一样高 */
            height: 100%; 
            box-sizing: border-box;
            /* 允许内容垂直排列溢出 */
            overflow: visible; 
        }

        [data-md-color-scheme="slate"] .card {
            border-color: #404040;
            background-color: #2e303e;
        }

        .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
            border-color: #608DBD;
        }

        /* 3. 头像样式 */
        .card .ava {
            width: 55px !important;
            height: 55px !important;
            border-radius: 50% !important;
            margin-right: 15px !important;
            object-fit: cover;
            flex-shrink: 0; /* 绝对不压缩头像 */
            border: 2px solid #fff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        /* 4. 文字区域：允许换行 */
        .card .card-header {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            /* 解决长单词/长URL撑破布局的终极方案 */
            min-width: 0; 
            word-wrap: break-word;
            word-break: break-all; /* 强制长英文单词换行 */
        }

        /* 博客名称 */
        .card .card-header a {
            font-size: 1.0rem;
            color: #608DBD;
            font-weight: bold;
            text-decoration: none;
            margin-bottom: 4px;
            display: block;
            line-height: 1.3;
            /* 允许换行 */
            white-space: normal; 
        }

        /* 描述文字 */
        .card .card-header .info {
            font-size: 0.8rem;
            color: #888;
            line-height: 1.4;
            /* 允许换行，显示全部文字 */
            white-space: normal; 
        }

        /* 5. 手机端适配 */
        @media (max-width: 768px) {
            .link-navigation {
                grid-template-columns: 1fr;
            }
        }
      </style>

      <div class="links-content">
         <div class="link-navigation">
            <div class="card">
               <img class="ava" src="https://avatars.githubusercontent.com/u/187371253?v=4" />
               <div class="card-header">
                  <a href="https://meraki111.netlify.app/" target="_blank">Meraki's bar</a>
                  <div class="info">一位学弟的博客</div>
               </div>
            </div>

            <div class="card">
               <img class="ava" src="https://avatars.githubusercontent.com/u/75525564?v=4" />
               <div class="card-header">
                  <a href="https://blog.iceyear.eu.org" target="_blank">Ice Year の位面</a>
                  <div class="info">Il n’y a pas de hasard, il n’y a que des rendez-vous.</div>
               </div>
            </div>

            <div class="card">
               <img class="ava" src="https://avatars.githubusercontent.com/u/138082074?v=4" />
               <div class="card-header">
                  <a href="https://blog.0pt.icu/" target="_blank">春风少年兄</a>
                  <div class="info">你在世纪大道东门</div>
               </div>
            </div>

            <div class="card">
               <img class="ava" src="https://avatars.githubusercontent.com/u/141223334?v=4" />
               <div class="card-header">
                  <a href="https://blog.yon.im/" target="_blank">Yon Zilch</a>
                  <div class="info">From the yon, into zilch. Life, a vanished dream.</div>
               </div>
            </div>

            <div class="card">
               <img class="ava" src="https://pic4.zhimg.com/80/v2-a0456a5f527c1923f096759f2926012f_1440w.webp" />
               <div class="card-header">
                  <a href="https://wcowin.work/" target="_blank">Wcowin's Blog</a>
                  <div class="info">循此苦旅，以达星辰</div>
               </div>
            </div>

            <div class="card">
               <img class="ava" src="https://avatars.githubusercontent.com/u/201520333?v=4" />
               <div class="card-header">
                  <a href="https://wuslee-yz.top/" target="_blank">Wuslee</a>
                  <div class="info">DB</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>


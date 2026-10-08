<template>
  <DefineTemplate v-slot="{ path, icon, name }">
    <NuxtLink
      :href="path"
      :class="`${$route.path === path ? 'bg-muted text-foreground' : 'text-muted-foreground'} flex items-center gap-3
              rounded-lg px-3 py-2 my-1 transition-all hover:text-foreground`"
    >
      <Icon :name="icon" size="16" />
      {{ name }}
    </NuxtLink>
  </DefineTemplate>

  <div class="flex min-h-screen w-full flex-col">
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <Sheet>
          <SheetTrigger as-child>
            <Button
              variant="outline"
              size="icon"
              class="shrink-0 md:hidden"
            >
              <Menu class="h-5 w-5" />
              <span class="sr-only">打开导航栏</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="flex flex-col">
            <nav class="grid gap-2 text-lg font-medium">
              <a
                href="#"
                class="flex items-center gap-2 text-lg font-semibold mb-3"
              >
                <Icon name="lucide:monitor" size="24" />
                <span class="sr-only">食堂显示屏</span>
              </a>
              <!-- 上面还有一处一模一样的导航栏代码，修改导航栏内容时记得把两处都改了，而且内容需要一致 -->
              <ReuseTemplate icon="lucide:home" name="主页" path="/" />
              <ReuseTemplate icon="lucide:monitor" name="子页面1" path="/device" />
              <ReuseTemplate icon="lucide:upload" name="子页面2" path="/content/create" />
            </nav>
          </SheetContent>
        </Sheet>
        <a href="/" class="flex items-center gap-2 font-semibold">
          <Icon name="lucide:monitor" size="24" />
          <span class=""><!-- 在这里填入项目名称 --></span>
        </a>
        <div class="w-full flex-1" />
        <DarkToggle />
        <ClientOnly>
          <DropdownMenu v-if="store.loggedIn">
            <DropdownMenuTrigger as-child>
              <Button variant="secondary" size="icon" class="rounded-full">
                <CircleUser class="h-5 w-5" />
                <span class="sr-only">展开用户选项下拉菜单</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel v-if="store.loggedIn">
                {{ store.username }}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>设置</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem @click="logout">
                登出
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button v-else variant="outline" @click="navigateTo('/login')">
            请登录
          </Button>
        </ClientOnly>
      </header>
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bell, CircleUser, Menu } from 'lucide-vue-next';
import { createReusableTemplate } from '@vueuse/core';
import { toast } from 'vue-sonner';

const store = useUserStore();
const [DefineTemplate, ReuseTemplate] = createReusableTemplate();

function logout() {
  store.logout();
  navigateTo('/');
  toast.success('登出成功');
}
</script>
